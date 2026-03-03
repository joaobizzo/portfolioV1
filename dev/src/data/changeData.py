import json
import os


def clear():
    os.system('cls' if os.name == 'nt' else 'clear')


def load_data(filepath):
    try:
        with open(filepath, 'r') as file:
            return json.load(file)
    except FileNotFoundError:
        return []

def save_data(filepath, data):
    with open(filepath, 'w') as file:
        json.dump(data, file, indent=4)

def update_project(data):
    for project in data:
        print(f"{project['id']}: {project['title']}")
    project_id = int(input("Enter the ID of the project you want to update: "))
    clear()
    project = next((p for p in data if p['id'] == project_id), None)
    if project is None:
        print("Project not found.")
        return
    
    while True:
        print("\nAvailable fields for update: title, description, thumbURL, printImageURL, link")
        field = input("Which field do you want to update? (Type 'exit' to finish): ")
        if field.lower() == 'exit':
            break
        if field in project:
            print(f"Current value for {field}: {project[field]}")
            print('')
            new_value = input(f"Enter the new value for {field}: ")
            project[field] = new_value
            clear()
            print(f"{field} successfully updated.")
        else:
            print("Invalid field.")
            
def add_project(data):
    new_id = max(project['id'] for project in data) + 1 if data else 1
    title = input("Enter the title of the new project: ")
    description = input("Enter the description of the new project: ")
    thumbURL = input("Enter the thumbnail URL: ")
    printImageURL = input("Enter the print image URL: ")
    link = input("Enter the project link: ")
    badges = []
    while True:
        badge = input("Enter a badge (abbreviation and name separated by a comma) or 'exit' to finish: ")
        if badge.lower() == 'exit':
            break
        abbreviation, name = badge.split(',')
        badges.append({"abbreviation": abbreviation.strip(), "name": name.strip()})
    new_project = {
        "id": new_id,
        "title": title,
        "description": description,
        "thumbURL": thumbURL,
        "printImageURL": printImageURL,
        "link": link,
        "badges": badges
    }
    data.append(new_project)
    print("New project added successfully.")

def main():
    filepath = 'src/data/projectsData.json'
    data = load_data(filepath)
    
    while True:
        choice = input("\nDo you want to 'update' an existing project or 'insert' a new one? (Type 'exit' to exit): ")
        if choice.lower() == 'exit':
            break
        elif choice.lower() == 'update':
            update_project(data)
        elif choice.lower() == 'insert':
            add_project(data)
        else:
            print("Invalid option.")
    
    save_data(filepath, data)
    print("Data saved successfully.")

if __name__ == '__main__':
    main()
