import React, { useState } from "react";
import Layout from "@/Frontend/Components/Layout";
import ProjectPreview from "@/Frontend/Components/ProjectPreview";
import ProjectImage from "@/Frontend/Components/ProjectImage";
import { FaceFrownIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import { SiGithub } from "react-icons/si";
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
                                    <article key={project.slug} className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden hover:shadow-md transition-all duration-300 flex flex-col h-full relative">
                                        <button type="button" onClick={() => openProject(project.slug)} aria-label={project.title} className="bg-gray-50 mb-1 dark:bg-gray-800 overflow-hidden relative border-b border-gray-100 dark:border-gray-800 shrink-0 block text-left">
                                            {project.featured && (
                                                <div className="absolute top-0 right-0 z-10 flex items-center gap-1.5 px-3 py-1.5 bg-blue-500 text-white rounded-bl-xl">
                                                    <StarIcon className="w-3.5 h-3.5 text-white" aria-hidden="true" />
                                                    <span className="text-[12px] font-semibold leading-normal tracking-wide">{t.projects.featuredLabel}</span>
                                                </div>
                                            )}
                                            <ProjectImage project={project} className="h-auto" />
                                        </button>

                                        <div className="p-3 flex-1 flex flex-col">
                                            <h2 className="mb-2 text-[15.4px] font-semibold text-gray-700 dark:text-gray-200 leading-[22px] tracking-wide line-clamp-1">{project.title}</h2>

                                            <p className="text-[12.5px] font-normal text-gray-500 dark:text-gray-400 leading-relaxed tracking-wide mb-5 line-clamp-2">{project.description}</p>

                                            <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between gap-2">
                                                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-1.5 text-[12px] font-semibold leading-normal tracking-wide text-gray-600 dark:text-gray-400 bg-gray-50/50 dark:bg-gray-800/50 rounded-lg transition-all border border-gray-100 dark:border-gray-700">
                                                    <SiGithub className="w-3.5 h-3.5" aria-hidden="true" />
                                                    <span>{t.projects.sourceCodeLabel}</span>
                                                </a>

                                                <button type="button" onClick={() => openProject(project.slug)} className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-1.5 text-[12px] font-semibold leading-normal tracking-wide text-white bg-blue-500 dark:bg-gray-800 dark:text-gray-100 dark:border dark:border-gray-700 rounded-lg transition-all shadow-sm">
                                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                    </svg>
                                                    <span>{t.projects.liveDemoLabel}</span>
                                                </button>
                                            </div>
                                        </div>
                                    </article>
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
