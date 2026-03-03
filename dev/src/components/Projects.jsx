import projects from "../data/projects.json";
import ProjectCard from "./ProjectCard";
import { useGradient } from '../context/GradientContext';

const Projects = () => {
  const { colors } = useGradient();
  const currentGradientColor = `linear-gradient(to right, ${colors[0]}, ${colors[1]})`;

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8 pb-4 text-center gradient-text">My Projects</h1>
      <p className="cursor-default text-white text-center text-xl mb-10 ">Click for info</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} currentGradientColor={currentGradientColor} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
