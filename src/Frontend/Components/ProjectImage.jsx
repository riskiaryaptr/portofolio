import React from "react";
import { CodeBracketIcon } from "@heroicons/react/24/outline";

/** Project screenshot, or a themed placeholder when the project has no image yet. */
function ProjectImage({ project, className = "", fit = "object-contain", eager = false }) {
    if (project.image) {
        return <img src={project.image} alt={project.title} loading={eager ? "eager" : "lazy"} decoding="async" className={`w-full h-full ${fit} ${className}`} />;
    }

    return (
        <div role="img" aria-label={project.title}
            className={`relative flex w-full h-full items-center justify-center overflow-hidden bg-gray-50 dark:bg-gray-900 text-gray-300 dark:text-gray-700 ${className}`}
            style={{ backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)", backgroundSize: "16px 16px" }}>
            {/* Mini browser window */}
            <div className="w-[62%] max-w-[260px] rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm">
                <div className="flex items-center gap-1 border-b border-gray-100 dark:border-gray-700 px-2.5 py-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-gray-300 dark:bg-gray-600" />
                    <span className="h-1.5 w-1.5 rounded-full bg-gray-300 dark:bg-gray-600" />
                    <span className="h-1.5 w-1.5 rounded-full bg-gray-300 dark:bg-gray-600" />
                </div>
                <div className="flex flex-col items-center gap-2 px-3 py-4">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-500 dark:bg-gray-700 dark:text-gray-200">
                        <CodeBracketIcon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="line-clamp-1 text-center text-[12.5px] font-semibold text-gray-600 dark:text-gray-300">{project.title}</span>
                    <span className="h-1.5 w-2/3 rounded-full bg-gray-100 dark:bg-gray-700" />
                </div>
            </div>
        </div>
    );
}

export default ProjectImage;
