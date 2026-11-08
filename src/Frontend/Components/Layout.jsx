import React from "react";
import Header from "@/Frontend/Components/Header";
import Seo from "@/Frontend/Components/Seo";
import { useContent } from "@/data";

/** Page shell: SEO tags, sidebar / mobile header, and the main content column. */
function Layout({ page, seoTitle, seoDescription, children }) {
    const { t } = useContent();

    return (
        <div className="dark:bg-gray-950 min-h-screen transition-colors duration-300">
            <Seo page={page} title={seoTitle} description={seoDescription} />

            <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-lg focus:bg-blue-500 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white">
                {t.nav.skipToContent}
            </a>

            <div className="mx-auto max-w-[1200px] px-4 sm:px-5 lg:px-2">
                <div className="flex flex-col lg:flex-row gap-x-3 items-start">
                    <Header />

                    <main id="main" className="flex-1 w-full min-w-0 pt-24 pb-16 lg:py-12">
                        {children}
                    </main>
                </div>
            </div>
        </div>
    );
}

export default Layout;
