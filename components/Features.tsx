import React, { useState, useEffect } from 'react';
import { Zap, Database, CheckSquare, Clock } from 'lucide-react';

export const Features: React.FC = () => {
    const [activeFeature, setActiveFeature] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveFeature((prev) => (prev + 1) % 4);
        }, 2000); // Rotate every 2 seconds
        return () => clearInterval(interval);
    }, []);

    const features = [
        {
            icon: Zap,
            title: "一鍵生成，報告秒出",
            desc: "無須人工逐字撰寫，透過 AI 瞬間完成繁瑣的結案報告，大幅縮短案件處理時間 (TAT)。"
        },
        {
            icon: Database,
            title: "資訊集成，便利檢核",
            desc: "自動彙整醫療費用、肇責比例、和解紀錄等關鍵數據至「比對小幫手」，核實報告無需切換視窗。"
        },
        {
            icon: CheckSquare,
            title: "精確萃取，降低幻覺",
            desc: "獨創的日誌初篩與護欄機制，確保引用的每一個事實都有據可查，避免 AI 產生錯誤資訊。"
        },
        {
            icon: Clock,
            title: "歷史借鏡，風格一致",
            desc: "學習過去優質報告的撰寫風格，讓每位理賠人員產出的報告品質都維持在高標準。"
        }
    ];

    return (
        <section className="min-h-screen flex items-center py-24 bg-gray-50 snap-start">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-5xl font-extrabold text-gray-900 mb-8">為什麼選擇 SmartClaim AI？</h2>
                    <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        專為產險理賠痛點設計，結合生成式 AI 與嚴謹的數據驗證流程。
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {features.map((feature, idx) => {
                        const isActive = idx === activeFeature;
                        return (
                            <div 
                                key={idx} 
                                className={`
                                    p-10 rounded-2xl transition-all duration-500 flex flex-col justify-between border
                                    ${isActive 
                                        ? 'bg-white border-brand-500 shadow-2xl scale-105 z-10 ring-4 ring-brand-500/10' 
                                        : 'bg-white border-gray-100 shadow-md opacity-70 hover:opacity-100 hover:shadow-lg'
                                    }
                                `}
                            >
                                <div>
                                    <div className={`
                                        w-20 h-20 rounded-2xl flex items-center justify-center mb-8 transition-colors duration-500
                                        ${isActive ? 'bg-brand-500 text-white' : 'bg-brand-100 text-brand-600'}
                                    `}>
                                        <feature.icon size={40} />
                                    </div>
                                    <h3 className={`text-3xl font-bold mb-6 transition-colors duration-500 ${isActive ? 'text-gray-900' : 'text-gray-700'}`}>
                                        {feature.title}
                                    </h3>
                                    <p className="text-xl text-gray-600 leading-relaxed">
                                        {feature.desc}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};