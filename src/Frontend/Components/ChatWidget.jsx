import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import { ChatBubbleLeftRightIcon, ArrowsPointingInIcon } from "@heroicons/react/24/outline";
import profilePic from "@/assets/Profile/Profile-1.jpg";

function ChatWidget() {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [activeChat, setActiveChat] = useState(null);
    const [showWarning, setShowWarning] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const { language } = useLanguage();
    const t = translations[language];

    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    if (location.pathname === "/chat") {
        return null;
    }

    const chatMessages = [
        { 
            id: 1, 
            name: "A", 
            message: language === "US" ? "Nice work bro" : "gg wak", 
            timestamp: "19/01/2026, 08:30", 
            isMe: false, 
            avatar: "https://ui-avatars.com/api/?name=A&background=db2777&color=fff"
        },
        { 
            id: 2, 
            name: "Afgan Irwansyah Hidayat", 
            message: language === "US" ? "That's cool" : "Mantap", 
            timestamp: "20/01/2026, 10:04", 
            isMe: false, 
            avatar: "https://ui-avatars.com/api/?name=Afgan+Irwansyah+Hidayat&background=db2777&color=fff"
        },
        { 
            id: 3, 
            name: "Elham Abdussalam", 
            message: language === "US" ? "Awesome bang" : "Keren bang", 
            timestamp: "21/01/2026, 09:38", 
            isMe: false, 
            avatar: "https://ui-avatars.com/api/?name=Elham+Abdussalam&background=000&color=fff"
        },
        { 
            id: 4, 
            name: "Aji Nur Aji", 
            message: language === "US" ? "Testing" : "Tes", 
            timestamp: "21/01/2026, 14:10", 
            isMe: false, 
            avatar: "https://ui-avatars.com/api/?name=Aji+Nur+Aji&background=ea580c&color=fff"
        },
        { 
            id: 5, 
            name: "Budi Santoso", 
            message: language === "US" ? "Great job!" : "Mantap mas!", 
            timestamp: "22/01/2026, 09:15", 
            isMe: false, 
            avatar: "https://ui-avatars.com/api/?name=Budi+Santoso&background=2563eb&color=fff"
        },
        { 
            id: 6, 
            name: "Riski Arya Putra", 
            message: language === "US" ? "Sure, thanks for the info." : "Siap mas, makasih banyak infonya.", 
            timestamp: "22/01/2026, 10:45", 
            isMe: true, 
            avatar: profilePic
        }
    ];

    const handleChatClick = (id) => {
        if (window.innerWidth < 1024) { 
            setActiveChat(activeChat === id ? null : id);
        }
    };

    const handleReplyClick = (e) => {
        e.stopPropagation();
        if (!isLoggedIn) {
            setShowWarning(true);
            setTimeout(() => setShowWarning(false), 3000);
        }
    };

    return (
        
        <div className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 ${isOpen ? 'z-[99999]' : 'z-40'} flex flex-col items-end`}>            
            {isOpen && (
                <div className="fixed inset-0 lg:fixed lg:inset-auto lg:bottom-[88px] lg:right-6 lg:w-[400px] lg:max-h-[calc(100vh-120px)] lg:mb-0 flex flex-col bg-white dark:bg-gray-900 lg:rounded-2xl shadow-2xl lg:shadow-lg overflow-hidden animate-in fade-in lg:zoom-in-95 duration-200 origin-bottom lg:origin-bottom-right border-0 lg:border lg:border-gray-100 dark:lg:border-gray-800">                    
                    <div className="py-2 px-4 lg:p-3 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center bg-white dark:bg-gray-900 flex-shrink-0">
                        <h3 className="font-semibold text-gray-800 dark:text-gray-100 text-sm/6 lg:text-sm/6 tracking-normal lg:tracking-normal leading-normal">{t.chat.conversation}</h3>
                        <button onClick={() => setIsOpen(false)} className="p-2 lg:p-0 -mr-2 lg:mr-0 text-gray-400 transition-colors">
                            <ArrowsPointingInIcon className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto p-3 lg:p-3 space-y-5 lg:space-y-5 chat-container bg-white dark:bg-gray-900 relative">
                        {showWarning && (
                            <div className="sticky top-0 left-0 right-0 z-50 mb-5 animate-in fade-in slide-in-from-top-2 duration-300">
                                <div className="bg-red-500/95 backdrop-blur-sm text-white px-4 py-2.5 rounded-lg shadow-sm flex items-center gap-x-3 text-[13px] font-semibold text-sm/6 leading-normal tracking-normal">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                                    </svg>
                                    <span>{t.chat.signInWarning}</span>
                                </div>
                            </div>
                        )}

                        {chatMessages.map((chat) => (
                            <div key={chat.id} className={`flex gap-x-3 group cursor-pointer lg:cursor-default ${chat.isMe ? 'flex-row-reverse' : ''}`} onClick={() => handleChatClick(chat.id)}>
                                <img src={chat.avatar} alt={chat.name} className="h-8 w-8 lg:h-7 lg:w-7 rounded-full flex-shrink-0 object-cover" />
                                
                                <div className={`flex-1 flex flex-col min-w-0 ${chat.isMe ? 'items-end' : 'items-start'}`}>
                                    <div className={`flex flex-wrap items-center gap-x-2 mb-1 lg:mb-0.5 w-full ${chat.isMe ? 'flex-row-reverse' : ''}`}>
                                        <span className="text-[13px] lg:text-[12px] font-semibold text-gray-800 dark:text-gray-200 truncate max-w-[150px] lg:max-w-none">{chat.name}</span>
                                        <span className="text-[10px] text-gray-500 dark:text-gray-400 whitespace-nowrap">{chat.timestamp}</span>
                                    </div>

                                    <div className={`flex items-center gap-x-2 w-full ${chat.isMe ? 'flex-row-reverse' : ''}`}>
                                        <div className={`px-3.5 py-2 lg:px-3 lg:py-1.5 inline-block max-w-[90%] lg:max-w-fit mt-0.5 transition-colors rounded-2xl lg:rounded-xl ${chat.isMe ? 'bg-blue-500 dark:bg-gray-800 text-white dark:text-gray-200 rounded-tr-none lg:rounded-tr-none' : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-tl-none lg:rounded-tl-none'}`}>
                                            <p className="text-[14.3px] lg:text-[14.3px] leading-relaxed lg:leading-normal font-normal break-words">{chat.message}</p>
                                        </div>

                                        <button onClick={handleReplyClick} className={`transition-all duration-200 flex items-center gap-x-1.5 px-2.5 py-1.5 rounded-md text-gray-400 flex-shrink-0 ${activeChat === chat.id ? 'opacity-100 bg-gray-100 dark:bg-gray-800 text-gray-600' : 'opacity-0 lg:group-hover:opacity-100 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-600 dark:hover:text-gray-200'}`} title={t.chat.reply}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12v0" />
                                            </svg>
                                            <span className="text-xs/6 leading-normal tracking-normal font-medium">{t.chat.reply}</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="p-3 lg:p-3 border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 flex-shrink-0 pb-4 lg:pb-4">
                        <p className="text-center text-[14px] lg:text-[13px] text-gray-500 dark:text-gray-400 font-medium mb-3 lg:mb-4 px-2">
                            {t.chat.signInPrompt}
                        </p>
                        
                        <div className="flex flex-col space-y-2.5">
                            <button className="flex items-center justify-center gap-x-2 px-5 py-2 lg:py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl lg:rounded-lg text-[14.5px] font-semibold text-gray-700 dark:text-gray-200 transition-colors w-full">
                                <svg className="h-5 w-5" viewBox="0 0 24 24">
                                    <path className="google-blue" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                                    <path className="google-green" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                                    <path className="google-yellow" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                                    <path className="google-red" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                                </svg>
                                <span className="truncate">{t.chat.signInGoogle}</span>
                            </button>

                            <button className="flex items-center justify-center gap-x-2 px-5 py-2 lg:py-2 bg-gray-900 border border-transparent dark:border-gray-700 rounded-xl lg:rounded-lg text-[14.5px] font-semibold text-white transition-colors w-full">
                                <svg className="h-6 w-6 text-gray-900 dark:text-white" viewBox="0 0 24 24" fill="currentColor">
                                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                                </svg>
                                <span className="truncate">{t.chat.signInGithub}</span>
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <button onClick={() => setIsOpen(!isOpen)} className={`w-12 h-12 rounded-full flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 transform active:scale-95 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700`}>
                {isOpen ? (
                    <ArrowsPointingInIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                ) : (
                    <div className="relative group">
                        <ChatBubbleLeftRightIcon className="w-6 h-6 text-gray-600 dark:text-gray-300 stroke-[1.3]" />
                        <span className="absolute -top-0 -right-0.5 w-2.5 h-2.5 bg-blue-500 rounded-full border-2 border-white dark:border-gray-800"></span>
                    </div>
                )}
            </button>
        </div>
    );
}

export default ChatWidget;