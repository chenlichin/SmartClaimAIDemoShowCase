import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, CheckCircle, FileText, ChevronRight, X, ArrowRight, RefreshCw, LayoutTemplate, Copy } from 'lucide-react';

const MOCK_GENERATED_TEXT = `一、理算說明：
對造 吳某某。
和解金額 350,000 元，公司同意給付 250,000 元，任意險賠付 150,000 元，強制險賠付 100,000 元，歸墊保戶15,000元。
註：保戶自負 0 元。
強制險事故當時投保XX公司。
若有進行S級通報請特別註記。

二、處理經過：
1. 肇事經過：
保車轉彎不當全責。

2. 肇事責任：
依 保車肇責 100%、對造肇責 0% 描述責任比例。
註：請註記本案是否有酒駕。

3. 診斷內容：
顱骨骨折合併硬腦膜、蜘蛛網膜出血、眼眶骨折氣腦、嘴唇撕裂傷併縫合。
住院天數 9 天、看護日數 1 天、休養日數 3 天、傷害情況 需後續治療。

4. 和解經過：
2025/08/21 新北市中和區調解委員會：本案於調解委員會進行和解協商，保車撞傷行人導致顱內出血、手腳擦傷，對造要求現場處理理賠事宜，因保戶出國無法親自協調，故委請主管協助處理資料傳送與後續理賠事宜。
2025/09/03 新北市中和區調解委員會：因對造未提供牙齒治療依據，無法送授權理賠，依現有資料概算扣除強制險10萬後處理，並持續追蹤對造補件進度。`;

export const DemoInterface: React.FC = () => {
    const [isGenerating, setIsGenerating] = useState(false);
    const [text, setText] = useState('');
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);
    
    // Typing effect logic
    const intervalRef = useRef<number | null>(null);

    const handleGenerate = () => {
        setIsGenerating(true);
        setText('');
        setSidebarOpen(false);
        let currentIndex = 0;

        if (intervalRef.current) clearInterval(intervalRef.current);

        // Simulate API delay then typing
        setTimeout(() => {
            intervalRef.current = window.setInterval(() => {
                setText(MOCK_GENERATED_TEXT.slice(0, currentIndex + 1));
                currentIndex++;
                
                if (currentIndex >= MOCK_GENERATED_TEXT.length) {
                    if (intervalRef.current) clearInterval(intervalRef.current);
                    setIsGenerating(false);
                    setSidebarOpen(true); // Open sidebar automatically after generation
                }
            }, 5); // Typing speed
        }, 800);
    };

    useEffect(() => {
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, []);

    return (
        <div className="w-full max-w-6xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200">
            {/* Mock Browser Header */}
            <div className="bg-brand-600 text-white px-4 py-2 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    <div className="flex space-x-1">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="flex items-center space-x-2 text-sm font-medium">
                        <div className="bg-white/20 p-1 rounded-md">
                            <LayoutTemplate size={16} />
                        </div>
                        <span>SmartClaim 產險理賠系統</span>
                    </div>
                </div>
                <div className="text-xs bg-brand-700 px-3 py-1 rounded-full">
                    Demo Mode
                </div>
            </div>

            {/* Toolbar */}
            <div className="bg-gray-50 border-b border-gray-200 p-3 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                    <button 
                        onClick={handleGenerate}
                        disabled={isGenerating}
                        className={`flex items-center space-x-2 px-4 py-2 rounded-md text-white font-medium transition-all ${
                            isGenerating ? 'bg-gray-400 cursor-not-allowed shadow-none' : 'bg-brand-600 hover:bg-brand-700 shadow-md hover:shadow-lg'
                        }`}
                    >
                        {isGenerating ? (
                            <>
                                <RefreshCw className="animate-spin" size={18} />
                                <span>生成中...</span>
                            </>
                        ) : (
                            <>
                                <Sparkles size={18} />
                                <span>生成結案報告</span>
                            </>
                        )}
                    </button>
                    
                    <div className="h-6 w-px bg-gray-300 mx-2"></div>
                    
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <label className="flex items-center space-x-2 cursor-pointer select-none">
                            <div className={`w-10 h-5 rounded-full relative transition-colors ${sidebarOpen ? 'bg-brand-500' : 'bg-gray-300'}`} onClick={() => setSidebarOpen(!sidebarOpen)}>
                                <div className={`absolute top-1 left-1 bg-white w-3 h-3 rounded-full transition-transform ${sidebarOpen ? 'translate-x-5' : ''}`}></div>
                            </div>
                            <span>理賠小幫手</span>
                        </label>
                    </div>
                </div>
                
                <div className="text-xs text-gray-400 flex items-center gap-1">
                    <Copy size={12}/>
                    <span>清除格式</span>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="flex h-[500px] relative">
                {/* Editor Area */}
                <div className={`flex-1 p-6 bg-gray-50 overflow-y-auto transition-all duration-300 ${sidebarOpen ? 'mr-[320px]' : ''}`}>
                    <div className="bg-white min-h-full p-8 shadow-sm rounded-lg border border-gray-100 relative">
                        {text ? (
                            <pre className="whitespace-pre-wrap font-sans text-gray-700 leading-relaxed text-sm">
                                {text}
                            </pre>
                        ) : (
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400">
                                <FileText size={48} className="mb-4 opacity-20" />
                                <p>請點擊左上角「生成結案報告」按鈕</p>
                                <p className="text-sm mt-2">AI 將自動彙整案件資訊並撰寫報告</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Sidebar (Comparison Helper) */}
                <div 
                    className={`absolute top-0 right-0 h-full w-[320px] bg-white border-l border-gray-200 transform transition-transform duration-300 shadow-xl ${
                        sidebarOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
                >
                    <div className="flex border-b border-gray-200">
                        <button className="flex-1 py-3 text-sm font-medium text-brand-600 border-b-2 border-brand-600">
                            R6 資料比對
                        </button>
                        <button className="flex-1 py-3 text-sm font-medium text-gray-500 hover:text-gray-700">
                            AI 生成來源
                        </button>
                    </div>

                    <div className="p-4 space-y-4 overflow-y-auto h-[calc(100%-50px)] bg-gray-50">
                        <div className="text-xs text-gray-500 mb-2 flex justify-between">
                            <span>資料來源檢核</span>
                            <span className="text-brand-600 flex items-center gap-1"><CheckCircle size={12}/> 已同步</span>
                        </div>

                        {/* Card 1 */}
                        <div className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm hover:border-brand-300 transition-colors cursor-pointer group">
                            <div className="flex justify-between items-start mb-2">
                                <span className="text-xs font-bold text-gray-700 px-2 py-0.5 bg-gray-100 rounded">交查紀錄</span>
                                <span className="text-xs text-gray-400">2025/08/21</span>
                            </div>
                            <div className="text-xs text-gray-600 line-clamp-3 group-hover:text-gray-900">
                                新北市中和區調解委員會：本案於調解委員會進行和解協商，保車撞傷行人導致...
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm hover:border-brand-300 transition-colors cursor-pointer group">
                            <div className="flex justify-between items-start mb-2">
                                <span className="text-xs font-bold text-gray-700 px-2 py-0.5 bg-gray-100 rounded">診斷證明</span>
                                <span className="text-xs text-gray-400">2025/04/28</span>
                            </div>
                            <div className="text-xs text-gray-600 group-hover:text-gray-900">
                                顱骨骨折合併硬腦膜、蜘蛛網膜出血。
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm hover:border-brand-300 transition-colors cursor-pointer group">
                            <div className="flex justify-between items-start mb-2">
                                <span className="text-xs font-bold text-gray-700 px-2 py-0.5 bg-gray-100 rounded">醫療費用</span>
                                <span className="text-xs text-gray-400">總計</span>
                            </div>
                            <div className="flex justify-between items-center mt-1">
                                <span className="text-xs text-gray-500">實際醫療費用</span>
                                <span className="text-sm font-mono font-medium text-brand-700">22,156 元</span>
                            </div>
                        </div>

                         <div className="text-center mt-4">
                            <button className="text-xs text-brand-600 hover:underline flex items-center justify-center w-full gap-1">
                                查看更多比對資料 <ChevronRight size={12} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};