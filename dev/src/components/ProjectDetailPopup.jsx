import React from 'react';
import { X } from 'lucide-react'; // Assuming lucide-react is available for icons

const ProjectDetailPopup = ({ project, currentGradientColor, onClose }) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md overflow-y-auto"
            onClick={(e) => {
        if (e.target === e.currentTarget) { // Only close if clicked directly on the overlay
          onClose();
        }
      }}
    >
      <div
        className="relative w-full max-w-3xl rounded-2xl p-2 shadow-2xl"
        style={{ background: currentGradientColor }}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside content
      >
        <div className="bg-black/80 rounded-xl p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-gray-300 focus:outline-none"
          >
            <X size={24} />
          </button>

          <h2 className="text-3xl font-bold text-white mb-4" style={{ color: currentGradientColor }}>{project.title}</h2>
          <p className="text-lg text-gray-300 mb-6">{project.tagline}</p>

          {project.coverImage && (
            <img
              src={project.coverImage}
              alt={project.title}
              className="h-64 aspect-video object-cover rounded-lg mb-6 mx-auto"
            />
          )}

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white mb-2" style={{ color: currentGradientColor }}>Problem Statement</h3>
            <p className="text-gray-200">{project.problemStatement}</p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white mb-2" style={{ color: currentGradientColor }}>Solution Overview</h3>
            <p className="text-gray-200">{project.solutionOverview}</p>
          </div>

          {project.processHighlights && project.processHighlights.length > 0 && (
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-white mb-2" style={{ color: currentGradientColor }}>Process Highlights</h3>
              <ul className="list-disc list-inside text-gray-200 pl-4">
                {project.processHighlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>
          )}

          {project.outcomeMetrics && project.outcomeMetrics.length > 0 && (
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-white mb-2" style={{ color: currentGradientColor }}>Outcome Metrics</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.outcomeMetrics.map((metric, index) => (
                  <div key={index} className="bg-white/5 p-4 rounded-lg">
                    <p className="text-gray-100 font-bold text-lg">{metric.value} {metric.unit}</p>
                    <p className="text-gray-300 text-sm">{metric.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {project.tags && project.tags.length > 0 && (
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-white mb-2" style={{ color: currentGradientColor }}>Technologies & Competencies</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag.name}
                    className="px-3 py-1 rounded-full text-sm font-medium"
                    style={{
                      background: `linear-gradient(to right, ${currentGradientColor.split(', ')[1]}, ${currentGradientColor.split(', ')[2].replace(')', '')})`,
                      color: 'white',
                    }}
                  >
                    {tag.name}
                  </span>
                ))}
              </div>
            </div>
          )}

          {project.links && project.links.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold text-white mb-2" style={{ color: currentGradientColor }}>Links</h3>
              <div className="flex flex-wrap gap-4">
                {project.links.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-white transition-colors duration-200"
                    style={{ background: currentGradientColor }}
                  >
                    {link.icon === 'github' && <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.44-.78-3.46 0 0-2.04 0-3.5 1.45-1.2-.33-2.49-.33-3.79 0-1.45-1.45-3.5-1.45-3.5-1.45-.5.92-.86 2.1-.78 3.46 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>}
                    {link.icon === 'slideshow' && <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-slideshow"><path d="M16 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2Z"/><path d="M22 18V5a2 2 0 0 0-2-2h-1"/><path d="M7 13v-2"/><path d="M10 13v-2"/><path d="M13 13v-2"/></svg>}
                    {link.icon === 'play-circle' && <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play-circle"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>}
                    {link.icon === 'package' && <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-package"><path d="m7.5 4.274-.61.619a1.5 1.5 0 0 0-.462 1.077V20.5a1.5 1.5 0 0 0 1.5 1.5h11a1.5 1.5 0 0 0 1.5-1.5V5.97a1.5 1.5 0 0 0-.462-1.076l-.61-.619Zm-.422-.426 5-5a1.5 1.5 0 0 1 2.121 0l5 5"/><path d="M7.5 3.848v3.295a1.5 1.5 0 0 0 .44 1.05l5 5a1.5 1.5 0 0 0 2.12 0l5-5a1.5 1.5 0 0 0 .44-1.05V3.848m-15 15h11"/></svg>}
                    {link.icon === 'layout' && <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layout-template"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><line x1="3" x2="21" y1="9" y2="9"/><line x1="9" x2="9" y1="21" y2="9"/></svg>}
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPopup;
