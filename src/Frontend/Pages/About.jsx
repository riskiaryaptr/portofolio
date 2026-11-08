import React, { useState } from "react";
import Layout from "@/Frontend/Components/Layout";
import { LogoBox } from "@/Frontend/Components/Brand";
import { SparklesIcon, ChevronRightIcon, AcademicCapIcon, BuildingOffice2Icon } from "@heroicons/react/24/outline";
import { useContent } from "@/data";

function Section({ icon: Icon, title, subtitle, delay, last = false, children }) {
    return (
        <section className={`mt-6 animate-slideUp ${last ? "" : "border-b border-gray-200 dark:border-gray-800 pb-8"}`} style={{ animationDelay: delay }}>
            <div className="flex items-center gap-x-2">
                <Icon className="h-5 w-5 text-gray-800 dark:text-gray-200" aria-hidden="true" />
                <h2 className="text-[20px] font-semibold leading-normal tracking-tight text-gray-700 dark:text-gray-100">{title}</h2>
            </div>
            <p className="mt-2 text-[15px] font-medium leading-normal tracking-tight text-gray-500 dark:text-gray-400">{subtitle}</p>
            <div className="mt-6 space-y-4">{children}</div>
        </section>
    );
}

function ExperienceCard({ id, logo, logoName, title, subtitle, location, meta, listTitle, items, expanded, onToggle, t }) {
    const panelId = `${id}-details`;
    return (
        <article className="rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 p-3 sm:p-4">
            <div className="flex flex-row items-start gap-4 sm:gap-5.5">
                <LogoBox src={logo} name={logoName} className="h-12 w-12 sm:h-14 sm:w-14" />

                <div className="flex-1 min-w-0">
                    <h3 className="text-[15px] sm:text-[16.2px] font-semibold text-gray-700 dark:text-gray-200 leading-normal tracking-normal">{title}</h3>

                    <div className="mt-1.5 flex flex-wrap items-center gap-x-1.5 text-[13.5px] font-medium leading-normal tracking-normal text-gray-500 dark:text-gray-400">
                        <span>{subtitle}</span>
                        <span className="text-gray-400 dark:text-gray-600 hidden sm:inline">/</span>
                        <span className="dark:text-gray-500">{location}</span>
                    </div>

                    <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-[12px] sm:text-[13px] text-gray-400 dark:text-gray-500 font-medium leading-normal">
                        {meta.filter(Boolean).map((m, i) => (
                            <React.Fragment key={i}>
                                {i > 0 && <span className="text-gray-300 dark:text-gray-700" aria-hidden="true">•</span>}
                                <span>{m}</span>
                            </React.Fragment>
                        ))}
                    </div>

                    <button type="button" onClick={onToggle} aria-expanded={expanded} aria-controls={panelId} className="mt-3.5 flex items-center gap-x-1 text-[13px] sm:text-[13.5px] font-semibold leading-normal tracking-normal text-gray-500 dark:text-gray-400">
                        <ChevronRightIcon className={`h-3.5 w-3.5 transition-transform duration-200 ${expanded ? "rotate-90" : ""}`} aria-hidden="true" />
                        {expanded ? t.about.hideResponsibilities : t.about.showResponsibilities}
                    </button>

                    {expanded && (
                        <div id={panelId} className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-800">
                            <h4 className="text-[14px] font-semibold text-gray-700 dark:text-gray-200 mb-2.5">{listTitle}</h4>
                            <ul className="space-y-2">
                                {items.map((item, idx) => (
                                    <li key={idx} className="flex items-baseline gap-x-2 text-[14px] text-gray-600 dark:text-gray-400 leading-normal">
                                        <span className="text-blue-500 dark:text-gray-400 shrink-0" aria-hidden="true">•</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </article>
    );
}

function About() {
    const { t, site, experiences, education, organizations } = useContent();
    const [expandedItem, setExpandedItem] = useState(null);
    const toggle = (id) => setExpandedItem((cur) => (cur === id ? null : id));

    return (
        <Layout page="about">
            <div className="animate-slideUp" style={{ animationDelay: '0.05s' }}>
                <h1 className="text-[23px] font-bold tracking-tight leading-normal text-gray-800 dark:text-gray-100">{t.about.title}</h1>
                <p className="mt-0.5 text-sm/6 font-medium leading-normal tracking-normal text-gray-500 dark:text-gray-400 border-b border-dashed pb-6 border-gray-300 dark:border-gray-800">{t.about.subtitle}</p>
            </div>

            <div className="mt-5 space-y-2.5 border-b border-gray-200 dark:border-gray-800 pb-8 animate-slideUp" style={{ animationDelay: '0.15s' }}>
                {[t.about.bio1, t.about.bio2, t.about.bio3].map((p, i) => (
                    <p key={i} className="text-body leading-loose tracking-tight font-medium text-gray-600 dark:text-gray-300">{p}</p>
                ))}

                <div className="mt-2 pt-4">
                    <p className="text-[15px] text-gray-600 dark:text-gray-400 mb-3">{t.about.bestRegards}</p>
                    <p className="font-signature font-bold tracking-normal text-[35px] leading-none text-blue-500 dark:text-gray-300">{site.name.split(" ").slice(0, 2).join(" ")}</p>
                </div>
            </div>

            <Section icon={SparklesIcon} title={t.about.experienceTitle} subtitle={t.about.experienceSubtitle} delay="0.25s">
                {experiences.map((exp) => (
                    <ExperienceCard key={exp.id} id={exp.id} t={t} logo={exp.logo} logoName={exp.company}
                        title={exp.title} subtitle={exp.company} location={exp.location}
                        meta={[exp.period, exp.duration, exp.type, exp.mode]}
                        listTitle={t.about.keyResponsibilities} items={exp.responsibilities}
                        expanded={expandedItem === exp.id} onToggle={() => toggle(exp.id)} />
                ))}
            </Section>

            <Section icon={AcademicCapIcon} title={t.about.educationTitle} subtitle={t.about.educationSubtitle} delay="0.25s">
                {education.map((edu) => (
                    <ExperienceCard key={edu.id} id={edu.id} t={t} logo={edu.logo} logoName={edu.school}
                        title={edu.school} subtitle={edu.program} location={edu.location}
                        meta={[edu.period, edu.status, edu.type]}
                        listTitle={t.about.activitiesAchievements} items={edu.activities}
                        expanded={expandedItem === edu.id} onToggle={() => toggle(edu.id)} />
                ))}
            </Section>

            <Section icon={BuildingOffice2Icon} title={t.about.organizationTitle} subtitle={t.about.organizationSubtitle} delay="0.35s" last>
                {organizations.map((org) => (
                    <ExperienceCard key={org.id} id={org.id} t={t} logo={org.logo} logoName={org.name}
                        title={org.name} subtitle={org.role} location={org.location}
                        meta={[org.period, org.duration, org.type]}
                        listTitle={t.about.activitiesAchievements} items={org.activities}
                        expanded={expandedItem === org.id} onToggle={() => toggle(org.id)} />
                ))}
            </Section>
        </Layout>
    );
}

export default About;
