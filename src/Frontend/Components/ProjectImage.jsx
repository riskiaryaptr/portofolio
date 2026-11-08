import React from "react";

/** Project screenshot, or a neutral placeholder when the project has no image yet. */
function ProjectImage({ project, className = "", fit = "object-contain", eager = false }) {
    if (project.image) {
        return <img src={project.image} alt={project.title} loading={eager ? "eager" : "lazy"} decoding="async" className={`w-full h-full ${fit} ${className}`} />;
    }

    return (
        <div role="img" aria-label={project.title} className={`flex aspect-[16/9] w-full h-full items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600 dark:from-gray-800 dark:to-gray-900 ${className}`}>
            <span className="px-6 text-center text-[17px] font-bold tracking-tight text-white/90">{project.title}</span>
        </div>
    );
}

export default ProjectImage;
