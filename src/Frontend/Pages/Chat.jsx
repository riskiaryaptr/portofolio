import React, { useState } from "react";
import Header from "@/Frontend/Components/Header";
import profilePic from "@/assets/Profile/Profile-1.jpg";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

function Chat() {
    const { language } = useLanguage();
    const t = translations[language];
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showWarning, setShowWarning] = useState(false);
    const [activeChat, setActiveChat] = useState(null);

    const handleReplyClick = () => {
        if (!isLoggedIn) {
            setShowWarning(true);
            setTimeout(() => setShowWarning(false), 3000);
        } else {
            console.log("Reply clicked - user is logged in");
        }
    };

    const chatMessages = [
        {
            id: 1,
            name: "Riski Arya Putra",
            timestamp: "24/12/2025, 16:10",
            message: language === "US" 
                ? "Hello everyone! Thanks for visiting my website. Please leave whatever you like to say, like suggestions, appreciation, question or anything here!"
                : "Halo semuanya! Terima kasih telah mengunjungi situs saya. Silakan tinggalkan apa pun yang ingin Anda sampaikan, seperti saran, apresiasi, pertanyaan, atau apa pun di sini!",
            avatar: profilePic,
            isOwner: true
        },
        {
            id: 2,
            name: "Ahmad Suhendra",
            timestamp: "24/12/2025, 16:15",
            message: "Hello",
            avatar: "https://ui-avatars.com/api/?name=Ahmad+Suhendra&background=f43f5e&color=fff",
            isOwner: false
        },
        {
            id: 3,
            name: "Hanifan Pangabekti",
            timestamp: "24/12/2025, 16:20",
            message: language === "US" ? "This is really awesome!" : "Ini benar-benar luar biasa!",
            avatar: "https://ui-avatars.com/api/?name=Hanifan+Pangabekti&background=3b82f6&color=fff",
            isOwner: false
        },
        {
            id: 4,
            name: "Riski Arya Putra",
            timestamp: "24/12/2025, 16:25",
            message: language === "US" ? "Thank you so much! Happy to share and hope it's useful" : "Terima kasih banyak! Senang bisa berbagi dan semoga bermanfaat",
            avatar: profilePic,
            isOwner: true
        },
        {
            id: 5,
            name: "Muhammad Rizki Syahputra",
            timestamp: "27/12/2025, 08:01",
            message: language === "US" ? "Cool bro" : "Keren bang",
            avatar: "https://ui-avatars.com/api/?name=Muhammad+Rizki&background=10b981&color=fff",
            isOwner: false
        },
        {
            id: 6,
            name: "By ILANN",
            timestamp: "27/12/2025, 21:30",
            message: language === "US" ? "Bro, how long did it take you to build this website from start to first publish?" : "Bang, berapa lama waktu yang dibutuhkan untuk membangun website ini dari awal sampai publikasi pertama?",
            avatar: "https://ui-avatars.com/api/?name=By+ILANN&background=f59e0b&color=fff",
            isOwner: false
        },
        {
            id: 7,
            name: "Riski Arya Putra",
            timestamp: "27/12/2025, 22:15",
            message: language === "US" 
                ? "Around 2-3 weeks for the first version. But I keep developing it until now. The important thing is to stay consistent and keep improving!"
                : "Sekitar 2-3 minggu untuk versi pertama. Tapi saya terus mengembangkannya sampai sekarang. Yang penting adalah tetap konsisten dan terus berbenah!",
            avatar: profilePic,
            isOwner: true
        },
        {
            id: 8,
            name: "Discord Customer",
            timestamp: "28/12/2025, 16:32",
            message: language === "US" ? "Can I use this as reference?" : "Bolehkah saya menggunakan ini sebagai referensi?",
            avatar: "https://ui-avatars.com/api/?name=Discord+Customer&background=8b5cf6&color=fff",
            isOwner: false
        },
        {
            id: 9,
            name: "Riski Arya Putra",
            timestamp: "28/12/2025, 17:00",
            message: language === "US" 
                ? "Sure, but don't forget to give credit. And if possible, develop it further to make it even better"
                : "Tentu saja, tapi jangan lupa berikan kredit. Dan jika memungkinkan, kembangkanlah lebih jauh agar menjadi lebih baik lagi",
            avatar: profilePic,
            isOwner: true
        },
    ];

    return (
        
        <div className="dark:bg-gray-950 min-h-screen transition-all duration-300">            
            {showWarning && (
                <div className="fixed top-20 lg:top-8 right-4 z-[100] animate-in fade-in zoom-in duration-300">
                    <div className="bg-red-500 dark:bg-red-600 text-white px-5 py-3 rounded-lg shadow-lg flex items-center gap-x-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                        </svg>
                        <span className="font-semibold text-sm/6 leading-normal tracking-normal">
                            {language === "US" ? "Please sign in to reply to messages" : "Silakan login terlebih dahulu untuk membalas pesan"}
                        </span>
                    </div>
                </div>
            )}

            <div className="mx-auto max-w-6xl px-4 sm:px-5 lg:px-2">
                <div className="flex flex-col lg:flex-row gap-x-3 items-start">
                    
                    <Header />

                    <main className="flex-1 py-28 lg:py-12">
                        <div className="w-full">
                            <div className="animate-slideUp" style={{ animationDelay: '0.05s' }}>
                                <h1 className="text-[23px] font-bold tracking-tight leading-normal text-gray-800 dark:text-gray-100">
                                    {t.chat.title}
                                </h1>

                                <div className="mt-0.5 flex items-center gap-x-4 text-sm/6 font-medium leading-normal tracking-normal text-gray-500 dark:text-gray-400 border-b border-dashed pb-6 border-gray-300 dark:border-gray-800">
                                    <span>{t.chat.subtitle}</span>                                
                                </div>
                            </div>

                            <div className="mt-6 space-y-6 h-[360px] overflow-y-auto px-0 lg:px-6 chat-container animate-slideUp" style={{ animationDelay: '0.15s' }}>
                                {chatMessages.map((chat) => (
                                    <div key={chat.id} className={`flex gap-x-3 group ${chat.isOwner ? 'flex-row-reverse' : ''}`} onClick={() => setActiveChat(activeChat === chat.id ? null : chat.id)}>
                                        <img src={chat.avatar} alt={chat.name} className="h-8 w-8 rounded-full flex-shrink-0" />
                                       
                                        <div className={`flex-1 flex flex-col ${chat.isOwner ? 'items-end' : 'items-start'}`}>
                                            <div className={`flex items-center gap-x-2 mb-1 ${chat.isOwner ? 'flex-row-reverse text-right' : ''}`}>
                                                <span className="text-sm/6 leading-normal tracking-normal font-semibold text-gray-800 dark:text-gray-200">{chat.name}</span>
                                                <span className="text-xs/6 leading-normal tracking-normal text-gray-500 dark:text-gray-400">{chat.timestamp}</span>
                                            </div>
                                            
                                            <div className={`flex items-center gap-x-2 ${chat.isOwner ? 'flex-row-reverse' : ''}`}>
                                                <div className={`${chat.isOwner ? 'bg-blue-500 dark:bg-gray-800 text-white dark:text-gray-200 rounded-xl rounded-tr-none' : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-xl rounded-tl-none'} px-3 py-2 inline-block max-w-full`}>
                                                    <p className="text-[14.3px] leading-normal tracking-normal">{chat.message}</p>
                                                </div>
                                                
                                                <button onClick={(e) => { e.stopPropagation(); handleReplyClick();}} className={`${activeChat === chat.id ? 'opacity-100' : 'opacity-0'} xl:opacity-0 xl:group-hover:opacity-100 transition-opacity px-2.5 py-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 flex items-center gap-x-1.5`} title="Reply">
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

                            <div className="mt-8 border-t border-gray-200 dark:border-gray-800 pt-6 animate-slideUp" style={{ animationDelay: '0.25s' }}>
                                <p className="text-sm/6 leading-normal font-semibold text-gray-600 dark:text-gray-400 text-center mb-4">
                                    {t.chat.signInPrompt}
                                </p>

                                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                    <button className="flex items-center justify-center gap-x-2 px-6 py-2.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-[14.5px] leading-normal tracking-wide font-semibold text-gray-700 dark:text-gray-200 transition-colors">
                                        <svg className="h-5 w-5" viewBox="0 0 24 24">
                                            <path className="google-blue" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                                            <path className="google-green" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                                            <path className="google-yellow" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                                            <path className="google-red" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                                        </svg>
                                        <span>{t.chat.signInGoogle}</span>
                                    </button>

                                    <button className="flex items-center justify-center gap-x-2 px-6 py-2.5 bg-gray-900 border border-transparent dark:border-gray-700 rounded-lg text-[14.5px] leading-normal tracking-wide font-semibold text-white transition-colors">
                                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                                        </svg>
                                        <span>{t.chat.signInGithub}</span>                                        
                                    </button>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}

export default Chat;