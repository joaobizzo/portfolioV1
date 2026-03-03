import React, { useState } from 'react';
import { useGradient } from '../context/GradientContext';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ProjectDetailPopup from './ProjectDetailPopup';

const ProjectCard = ({ project, currentGradientColor }) => {
  const { colors } = useGradient();
  const [showPopup, setShowPopup] = useState(false);

  const handleOpenPopup = () => {
    console.log('Project card clicked (overlay debug)!');
    setShowPopup(true);
  };
  const handleClosePopup = () => setShowPopup(false);

  // Base classes for the actual ProjectCard component, including Glassmorphism styles
  // The 'relative' and 'z-10' classes ensure the card is positioned above the glowing element.
  const cardClasses = "relative z-10 h-full flex flex-col " +
                      "bg-black/20 backdrop-blur-lg border border-white/10 rounded-2xl " +
                      "transition-all duration-300 ease-in-out transform group-hover:scale-[1.02]";

  return (
    <>
      {/* Outer wrapper for the glowing effect. 'group' enables group-hover. */}
      {/* 'relative' is for positioning the absolute glow element. */}
      {/* 'rounded-2xl' and 'overflow-hidden' ensure the glow respects the card's rounded corners. */}
      <div
        className="group relative rounded-2xl overflow-hidden"
      >
        {/* Clickable Overlay */}
        <div className="absolute inset-0 z-[100] cursor-pointer" onClick={handleOpenPopup}></div>

        {/* Dynamic Gradient Glow Element (positioned absolutely behind the card) */}
        <div
          className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out pointer-events-none"
          style={{ background: `linear-gradient(to right, ${colors[0]}, ${colors[1]})` }}
        ></div>

        {/* Actual Project Card component with glassmorphism and content */}
        <Card className={cardClasses}>
          <CardHeader className="p-4">
            {project.coverImage && (
              <img
                src={project.coverImage}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
            )}
            <CardTitle className="text-white text-xl font-bold">{project.title}</CardTitle>
            <CardDescription className="text-gray-300 text-base mt-1">{project.tagline}</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow px-4 pb-0">
            <p className="text-gray-200 text-sm line-clamp-3">{project.description}</p>
          </CardContent>
          <CardFooter className="flex flex-wrap gap-2 p-4 pt-4">
            {project.tags.map((tag) => {
              let variant = "default";
              switch (tag.type) {
                case "competency":
                  variant = "secondary";
                  break;
                case "activity":
                  variant = "outline";
                  break;
                default:
                  variant = "default";
              }
              return (
                <Badge key={tag.name} variant={variant} className="text-white bg-white/10 border-white/20">
                  {tag.name}
                </Badge>
              );
            })}
          </CardFooter>
        </Card>
      </div>

      {showPopup && (
        <ProjectDetailPopup
          project={project}
          currentGradientColor={currentGradientColor}
          onClose={handleClosePopup}
        />
      )}
    </>
  );
};

export default ProjectCard;
