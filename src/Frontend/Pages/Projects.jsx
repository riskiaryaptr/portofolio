import React, { useState } from "react";
import Layout from "@/Frontend/Components/Layout";
import ProjectPreview from "@/Frontend/Components/ProjectPreview";
import ProjectImage from "@/Frontend/Components/ProjectImage";
import { FaceFrownIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import { useContent } from "@/data";

function Projects() {
    const { t, projects } = useContent();
    const [activeSlug, setActiveSlug] = useState(null);
    const activeProject = projects.find((p) => p.slug === activeSlug);

    const openProject = (slug) => {
        setActiveSlug(slug);
        window.scrollTo({ top: 0 });
    };

    return (
        <Layout page="projects" seoTitle={activeProject?.title} seoDescription={activeProject?.description}>
            {activeProject ? (
                <ProjectPreview project={activeProject} onBack={() => setActiveSlug(null)} />
            ) : (
                <>
                    <div className="animate-slideUp" style={{ animationDelay: '0.05s' }}>
                        <h1 className="text-[23px] font-bold tracking-tight leading-tight text-gray-800 dark:text-gray-100">{t.projects.title}</h1>
                        <p className="mt-1 text-sm/6 font-medium leading-normal tracking-normal text-gray-500 dark:text-gray-400 border-b border-dashed pb-6 border-gray-300 dark:border-gray-800">{t.projects.subtitle}</p>
                    </div>

                    <div className="mt-6 animate-slideUp" style={{ animationDelay: '0.35s' }}>
                        {projects.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                {projects.map((project) => (
                                    <button key={project.slug} type="button" onClick={() => openProject(project.slug)}
                                        className="group text-left bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden flex flex-col h-full relative transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:border-blue-200 dark:hover:border-gray-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
                                        <div className="bg-gray-50 dark:bg-gray-800 overflow-hidden relative border-b border-gray-100 dark:border-gray-800 w-full aspect-[16/9]">
                                            {project.featured && (
                                                <div className="absolute top-0 right-0 z-10 flex items-center gap-1.5 px-3 py-1.5 bg-blue-500 text-white rounded-bl-xl">
                                                    <StarIcon className="w-3.5 h-3.5 text-white" aria-hidden="true" />
                                                    <span className="text-[12px] font-semibold leading-normal tracking-wide">{t.projects.featuredLabel}</span>
                                                </div>
                                            )}
                                            <ProjectImage project={project} fit="object-cover object-top" className="transition-transform duration-500 group-hover:scale-[1.03]" />
                                        </div>

                                        <div className="p-4 flex-1 flex flex-col">
                                            <h2 className="mb-2 text-[15.4px] font-semibold text-gray-700 dark:text-gray-200 leading-[22px] tracking-wide line-clamp-1">{project.title}</h2>
                                            <p className="text-[12.5px] font-normal text-gray-500 dark:text-gray-400 leading-relaxed tracking-wide line-clamp-2">{project.description}</p>

                                            <div className="mt-auto pt-4 flex items-center justify-between gap-3">
                                                <ul className="flex flex-nowrap items-center gap-1.5 min-w-0 overflow-hidden">
                                                    {project.stack.slice(0, 2).map((tech) => (
                                                        <li key={tech} className="shrink-0 whitespace-nowrap rounded-md border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-2 py-1 text-[11px] font-semibold leading-none text-gray-600 dark:text-gray-400">{tech}</li>
                                                    ))}
                                                    {project.stack.length > 2 && (
                                                        <li title={project.stack.slice(2).join(", ")} className="shrink-0 whitespace-nowrap rounded-md border border-gray-200 dark:border-gray-700 px-1.5 py-1 text-[11px] font-semibold leading-none text-gray-400 dark:text-gray-500">+{project.stack.length - 2}</li>
                                                    )}
                                                </ul>
                                                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 transition-colors group-hover:bg-blue-500 group-hover:text-white dark:group-hover:bg-gray-700" aria-hidden="true">
                                                    <ArrowRightIcon className="h-4 w-4" />
                                                </span>
                                            </div>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center py-24 bg-transparent border border-dashed border-gray-300 dark:border-gray-800 rounded-3xl">
                                <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-full mb-4">
                                    <FaceFrownIcon className="h-10 w-10 text-gray-400 dark:text-gray-600" aria-hidden="true" />
                                </div>
                                <h2 className="text-[17px] font-bold text-gray-400 dark:text-gray-600 tracking-wide leading-normal mb-1">{t.projects.noDataTitle}</h2>
                                <p className="text-[14px] tracking-wide text-gray-400 dark:text-gray-500 font-medium leading-normal">{t.projects.noDataSubtitle}</p>
                            </div>
                        )}
                    </div>
                </>
            )}
        </Layout>
    );
}

export default Projects;
