import React from "react";
import Layout from "@/Frontend/Components/Layout";
import { useContent } from "@/data";

function Index() {
    const { t, skillGroups } = useContent();

    return (
        <Layout page="home">
            <div className="animate-slideUp" style={{ animationDelay: '0.05s' }}>
                <h1 className="text-[26.5px] font-bold tracking-tight leading-normal text-gray-700 dark:text-gray-100">
                    {t.home.greeting}
                </h1>

                <div className="mt-1.5 flex flex-wrap items-center gap-x-4 text-[14.5px] font-medium leading-normal tracking-normal text-gray-500 dark:text-gray-400">
                    <span>• {t.home.location}</span>
                    <span>• {t.home.workMode}</span>
                </div>
            </div>

            <p className="mt-4.5 text-body leading-loose tracking-tight font-medium text-gray-600 dark:text-gray-300 border-b border-gray-200 dark:border-gray-800 pb-7 animate-slideUp" style={{ animationDelay: '0.15s' }}>
                {t.home.bio}
            </p>

            <section aria-labelledby="skills-title" className="mt-6 animate-slideUp" style={{ animationDelay: '0.25s' }}>
                <h2 id="skills-title" className="font-bold text-lg tracking-wide leading-normal text-gray-700 dark:text-gray-100">
                    <span aria-hidden="true">{"</>"} </span>{t.home.skillsTitle}
                </h2>

                <p className="mt-1 text-sm/6 font-medium leading-normal tracking-normal text-gray-500 dark:text-gray-400">{t.home.skillsSubtitle}</p>

                <div className="mt-5 grid grid-cols-2 xl:grid-cols-4 gap-2.5 sm:gap-3">
                    {skillGroups.map((group) => (
                        <article key={group.id} className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/60 p-3.5 sm:p-5 transition-colors hover:border-blue-200 dark:hover:border-gray-700">
                            <h3 className="text-[14.5px] sm:text-[15.5px] font-bold tracking-tight text-gray-700 dark:text-gray-100">{group.title}</h3>

                            <ul className="mt-3 sm:mt-4 space-y-0.5 sm:space-y-1">
                                {group.items.map(({ name, icon: Icon, color }) => (
                                    <li key={name} style={{ "--brand": color }} className="group flex items-center gap-x-2.5 sm:gap-x-3 rounded-lg -mx-1.5 px-1.5 sm:-mx-2 sm:px-2 py-1.5 text-[13px] sm:text-[14px] leading-snug font-medium text-gray-600 dark:text-gray-300 transition-colors hover:bg-gray-50 dark:hover:bg-gray-800/60">
                                        <span className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 transition-colors">
                                            <Icon className="h-4 w-4 sm:h-[18px] sm:w-[18px] text-gray-500 dark:text-gray-400 transition-colors group-hover:text-[var(--brand)] dark:group-hover:text-gray-100" aria-hidden="true" />
                                        </span>
                                        {name}
                                    </li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </section>
        </Layout>
    );
}

export default Index;
