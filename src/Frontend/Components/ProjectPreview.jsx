import React from "react";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { SiGithub } from "react-icons/si";
import ProjectImage from "@/Frontend/Components/ProjectImage";
import { useContent } from "@/data";

function ProjectPreview({ project, onBack }) {
    const { t } = useContent();
    if (!project) return null;
    const { details } = project;

    return (
        <article className="w-full">
            <button type="button" onClick={onBack} className="mb-2 inline-flex items-center gap-x-2 text-[14px] font-semibold leading-normal tracking-wide text-gray-600 dark:text-gray-400 dark:hover:text-gray-200 transition-colors">
                <ArrowLeftIcon className="h-3.5 w-3.5" aria-hidden="true" />
                <span>{t.projects.backToProjectsLabel}</span>
            </button>

            <div className="animate-slideUp" style={{ animationDelay: '0.05s' }}>
                <h1 className="text-[23px] font-bold tracking-tight leading-normal text-gray-700 dark:text-gray-100">{project.title}</h1>
                <p className="mt-0.5 text-sm/6 font-medium leading-normal tracking-normal text-gray-500 dark:text-gray-400 border-b border-dashed pb-6 border-gray-300 dark:border-gray-800">{project.description}</p>
            </div>

            <div className="mt-6 space-y-6 animate-slideUp" style={{ animationDelay: '0.15s' }}>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                        <span className="text-[14px] font-semibold text-gray-700 dark:text-gray-300 whitespace-nowrap">{t.projects.techStackLabel}</span>
                        <p className="text-[14px] font-medium text-gray-600 dark:text-gray-400">{project.stack.join(", ")}</p>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-4 py-2 text-[13px] font-semibold text-gray-700 dark:text-gray-300 rounded-lg border border-gray-200 dark:border-gray-700 transition-colors flex-1 sm:flex-initial">
                            <SiGithub className="w-4 h-4" aria-hidden="true" />
                            <span>{t.projects.sourceCodeLabel}</span>
                        </a>

                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-4 py-2 text-[13px] font-semibold text-gray-700 dark:text-gray-300 rounded-lg border border-gray-200 dark:border-gray-700 transition-colors flex-1 sm:flex-initial">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            <span>{t.projects.liveDemoLabel}</span>
                        </a>
                    </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 h-[220px] sm:h-[450px] w-full">
                    <ProjectImage project={project} fit="object-cover object-top" className="dark:opacity-93" eager />
                </div>

                {details && (
                    <section className="mt-8 border-b border-gray-200 dark:border-gray-800 pb-7">
                        <h2 className="mb-2 text-[20px] font-semibold leading-normal tracking-normal text-gray-700 dark:text-gray-100">{t.projects.introductionTitle}</h2>

                        <div className="space-y-3 text-[15px] leading-relaxed text-gray-700 dark:text-gray-300">
                            {details.paragraphs?.map((p, i) => <p key={i}>{p}</p>)}

                            {details.bullets?.length > 0 && (
                                <ul className="space-y-2 ml-4">
                                    {details.bullets.map((b, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <span className="text-gray-400 mt-1" aria-hidden="true">•</span>
                                            <span>{b}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}

                            {details.closing?.map((p, i) => <p key={i}>{p}</p>)}
                        </div>
                    </section>
                )}
            </div>
        </article>
    );
}

export default ProjectPreview;
