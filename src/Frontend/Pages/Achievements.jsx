import React, { useState, useMemo } from "react";
import Header from "@/Frontend/Components/Header";
import Logo3 from "@/assets/Logo/Logo-5.png";
import Logo6 from "@/assets/Logo/Logo-6.png";
import AchievementModal from "@/Frontend/Components/AchievementsModal";
import Cert1 from "@/assets/Certificates/Certificate-01.jpg";
import Cert2 from "@/assets/Certificates/Certificate-02.jpg";
import Cert3 from "@/assets/Certificates/Certificate-03.jpg";
import { MagnifyingGlassIcon, ChevronUpDownIcon, FaceFrownIcon } from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

function Achievements() {
    const { language } = useLanguage();
    const t = translations[language];
     
    const [searchQuery, setSearchQuery] = useState("");
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);
    const [selectedFilter, setSelectedFilter] = useState("Filter by Category");
    const [selectedCategory, setSelectedCategory] = useState("Filter by Type");
    const [categorySearch, setCategorySearch] = useState("");
    const [achievementSearch, setAchievementSearch] = useState("");
    const [selectedAchievement, setSelectedAchievement] = useState(null);

    const certificateImages = {
        1: Cert1,
        2: Cert2,
        3: Cert3
    };

    const achievements = useMemo(() => {
        const logoMap = {
            1: Logo3,
            2: Logo6,
            3: Logo6
        };
        return t.achievements.data.map(item => ({
            ...item,
            issuerLogo: logoMap[item.id] || Logo6,
            image: certificateImages[item.id] || Cert1
        }));
    }, [t]);

    const categories = Object.keys(t.achievements.categories);
    const filteredCategories = categories.filter(cat => 
        t.achievements.categories[cat].toLowerCase().includes(categorySearch.toLowerCase())
    );

    const filterOptions = Object.keys(t.achievements.types);
    const filteredFilterOptions = filterOptions.filter(opt => 
        t.achievements.types[opt].toLowerCase().includes(achievementSearch.toLowerCase())
    );

    const handleFilterSelect = (filterKey) => {
        setSelectedFilter(filterKey);
        setIsFilterOpen(false);
        setAchievementSearch("");
    };

    const handleCategorySelect = (categoryKey) => {
        setSelectedCategory(categoryKey);
        setIsCategoryOpen(false);
        setCategorySearch("");
    };

    const handleOpenModal = (achievement) => {
        setSelectedAchievement(achievement);
        document.body.style.overflow = "hidden";
    };

    const handleCloseModal = () => {
        setSelectedAchievement(null);
        document.body.style.overflow = "auto";
    };

    const filteredAchievements = achievements.filter(achievement => {
        const matchesSearch = achievement.title.toLowerCase().includes(searchQuery.toLowerCase()) || achievement.issuer.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesType = selectedFilter === "Filter by Category" || achievement.type === selectedFilter;
        const matchesCategory = selectedCategory === "Filter by Type" || achievement.category === selectedCategory;
        return matchesSearch && matchesType && matchesCategory;
    });

    return (
        
        <div className="dark:bg-gray-950 min-h-screen transition-all duration-300">
            <div className="mx-auto max-w-6xl px-4 sm:px-5 lg:px-2">
                <div className="flex flex-col lg:flex-row gap-x-3 items-start">
                    <Header />
                    <main className="flex-1 py-28 lg:py-12">
                        <div className="w-full">
                            <div className="animate-slideUp" style={{ animationDelay: '0.05s' }}>
                                <h1 className="text-[23px] font-bold tracking-tight leading-normal text-gray-800 dark:text-gray-100">
                                    {t.achievements.title}
                                </h1>

                                <div className="mt-0.5 flex items-center gap-x-4 text-sm/6 font-medium leading-normal tracking-normal text-gray-500 dark:text-gray-400 border-b border-dashed pb-6 border-gray-300 dark:border-gray-800">
                                    <span>{t.achievements.subtitle}</span>                                
                                </div>
                            </div>
                        
                            <div className="mt-7 grid grid-cols-1 sm:grid-cols-3 gap-3 items-center animate-slideUp relative z-40" style={{ animationDelay: '0.15s' }}>
                                <div className="relative w-full">
                                    <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                                    <input type="text" placeholder={t.achievements.searchPlaceholder} value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full pl-10 pr-4 py-2.5 text-sm border border-gray-300 dark:border-gray-800 rounded-lg bg-transparent text-gray-700 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-1 dark:focus:ring-gray-700 focus:border-transparent"/>
                                </div>

                                <div className="relative w-full">
                                    <button onClick={() => { setIsCategoryOpen(!isCategoryOpen); setIsFilterOpen(false);}} className="w-full flex items-center justify-between px-3.5 py-2.5 text-sm/6 font-medium text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-900 rounded-xl whitespace-nowrap transition-colors">
                                        <span className="text-gray-600 dark:text-gray-400">
                                            {selectedCategory === "Filter by Type" ? t.achievements.filterTypePlaceholder : t.achievements.categories[selectedCategory]}
                                        </span>
                                        <ChevronUpDownIcon className="h-5 w-5 text-gray-500" />
                                    </button>

                                    {isCategoryOpen && (
                                        <div className="absolute left-0 mt-2 w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg shadow-lg z-[45] overflow-hidden">
                                            <div className="relative p-3 border-b border-gray-100 dark:border-gray-800">
                                                <MagnifyingGlassIcon className="absolute left-6 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                                <input type="text" placeholder={t.achievements.searchCategoryPlaceholder} value={categorySearch} onChange={(e) => setCategorySearch(e.target.value)} className="w-full pl-9 pr-3 py-2 text-sm text-gray-600 dark:text-gray-300 placeholder-gray-400 placeholder:font-normal placeholder:tracking-wide placeholder:text-[14px] bg-transparent focus:outline-none rounded-md"/>
                                            </div>

                                            <div className="py-1 max-h-54 overflow-y-auto [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-200 dark:[&::-webkit-scrollbar-thumb]:bg-gray-700 [&::-webkit-scrollbar-thumb]:rounded-full">
                                                {filteredCategories.map((catKey) => (
                                                    <button key={catKey} onClick={() => handleCategorySelect(catKey)} className="w-full text-left px-6 py-2.5 text-sm/6 leading-normal tracking-wide font-semibold text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors flex items-center justify-between group">
                                                        <span className={selectedCategory === catKey ? "text-blue-600 dark:text-blue-400" : ""}>{t.achievements.categories[catKey]}</span>
                                                        <div className="w-5 h-5 flex-shrink-0 flex items-center justify-end">
                                                            {selectedCategory === catKey && <CheckCircleIcon className="w-4.5 h-4.5 text-blue-500 animate-in zoom-in duration-200" />}
                                                        </div>
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div className="relative w-full">
                                    <button onClick={() => { setIsFilterOpen(!isFilterOpen); setIsCategoryOpen(false);}} className="w-full flex items-center justify-between px-3.5 py-2.5 text-sm/6 font-medium text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-900 rounded-xl whitespace-nowrap transition-colors">
                                        <span className="text-gray-600 dark:text-gray-400">
                                            {selectedFilter === "Filter by Category" ? t.achievements.filterCategoryPlaceholder : t.achievements.types[selectedFilter]}
                                        </span>
                                        <ChevronUpDownIcon className="h-5 w-5 text-gray-500" />
                                    </button>

                                    {isFilterOpen && (
                                        <div className="absolute right-0 mt-2 w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg shadow-lg z-[45] overflow-hidden">
                                            <div className="relative p-3 border-b border-gray-100 dark:border-gray-800">
                                                <MagnifyingGlassIcon className="absolute left-6 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                                <input type="text" placeholder={t.achievements.searchTypePlaceholder} value={achievementSearch} onChange={(e) => setAchievementSearch(e.target.value)} className="w-full pl-9 pr-3 py-2 text-sm text-gray-600 dark:text-gray-300 placeholder-gray-400 placeholder:font-normal placeholder:tracking-wide placeholder:text-[14px] bg-transparent focus:outline-none rounded-md"/>
                                            </div>

                                            <div className="py-1 max-h-54 overflow-y-auto [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-200 dark:[&::-webkit-scrollbar-thumb]:bg-gray-700 [&::-webkit-scrollbar-thumb]:rounded-full">
                                                {filteredFilterOptions.map((optKey) => (
                                                    <button key={optKey} onClick={() => handleFilterSelect(optKey)} className="w-full text-left px-6 py-2.5 text-sm/6 leading-normal tracking-wide font-semibold text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors flex items-center justify-between group">
                                                        <span className={selectedFilter === optKey ? "text-blue-600 dark:text-blue-400" : ""}>{t.achievements.types[optKey]}</span>
                                                        <div className="w-5 h-5 flex-shrink-0 flex items-center justify-end">
                                                            {selectedFilter === optKey && <CheckCircleIcon className="w-4.5 h-4.5 text-blue-500 animate-in zoom-in duration-200" />}
                                                        </div>
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="mt-4 animate-slideUp" style={{ animationDelay: '0.25s' }}>
                                <p className="text-sm/6 leading-normal tracking-wide font-medium text-gray-600 dark:text-gray-400">{t.achievements.total} {filteredAchievements.length}</p>
                            </div>

                            <div className="mt-6 animate-slideUp" style={{ animationDelay: '0.35s' }}>
                                {filteredAchievements.length > 0 ? (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                        {filteredAchievements.map((achievement) => (
                                            <div key={achievement.id} onClick={() => handleOpenModal(achievement)} className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden cursor-pointer hover:shadow-sm transition-all duration-300">                                        
                                                <div className="bg-white dark:bg-gray-800 overflow-hidden relative border-b border-gray-100 dark:border-gray-800 dark:opacity-93">
                                                    <img src={achievement.image} alt={achievement.title} className="w-full h-auto"/>
                                                </div>

                                                <div className="p-4">
                                                    <h3 className="text-[15.4px] font-medium text-gray-700 dark:text-gray-200 leading-[25px] tracking-wide mb-2.5 line-clamp-2">
                                                        {achievement.title}
                                                    </h3>

                                                    <p className="text-[13px] font-medium text-gray-500 dark:text-gray-400 leading-normal tracking-wide mb-2.5 line-clamp-1">
                                                        {achievement.issuer}
                                                    </p>

                                                    <p className="text-[12.5px] font-medium text-gray-400 dark:text-gray-500 leading-normal tracking-wide mb-2.5 flex items-center">
                                                        {t.achievements.categories[achievement.category]}
                                                        <span className="mx-2">•</span>
                                                            {t.achievements.types[achievement.type]}
                                                    </p>

                                                    <div className="mt-3.5 pt-2.5 border-t border-gray-100 dark:border-gray-800 flex justify-start">
                                                        <p className="text-[14px] font-medium text-gray-500 dark:text-gray-400 leading-normal tracking-wide">
                                                            {t.achievements.issuedOn} {achievement.issuedDate}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="flex flex-col items-center justify-center py-24 bg-transparent border border-dashed border-gray-300 dark:border-gray-800 rounded-3xl animate-in fade-in zoom-in duration-500">
                                        <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-full mb-4">
                                            <FaceFrownIcon className="h-10 w-10 text-gray-400 dark:text-gray-600" />
                                        </div>

                                        <h3 className="text-[17px] font-bold text-gray-400 dark:text-gray-600 tracking-wide leading-normal mb-1">
                                            {t.achievements.noDataTitle}
                                        </h3>

                                        <p className="text-[14px] tracking-wide text-gray-400 dark:text-gray-500 font-medium leading-normal">
                                            {t.achievements.noDataSubtitle}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </main>
                </div>
            </div>

            <AchievementModal achievement={selectedAchievement} onClose={handleCloseModal} />
        </div>
    );
}

export default Achievements;