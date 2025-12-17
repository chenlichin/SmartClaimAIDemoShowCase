import React, { useState, useEffect } from 'react';
import { Filter, Globe, FileText, ShieldCheck, BrainCircuit, Users, Ruler, Activity, Database, FileCheck, FileWarning, Sparkles } from 'lucide-react';

export const TechArchitecture: React.FC = () => {
    // --- State for Section 1: Pipeline Loop ---
    const [pipelineStep, setPipelineStep] = useState(0);
    // Steps: 0 (Raw), 1 (Layer1), 2 (Layer2), 3 (Layer3), 4 (Layer4), 5 (Output)
    
    useEffect(() => {
        const interval = setInterval(() => {
            setPipelineStep((prev) => (prev + 1) % 6);
        }, 800); // Speed up: 0.8s per step
        return () => clearInterval(interval);
    }, []);

    const layers = [
        {
            icon: Filter,
            title: "日誌初篩",
            desc: "過濾雜訊\n提取關鍵事件"
        },
        {
            icon: Globe,
            title: "全局理解",
            desc: "串聯脈絡\n理解因果關係"
        },
        {
            icon: FileText,
            title: "報告生成",
            desc: "撰寫草稿\n符合專業格式"
        },
        {
            icon: ShieldCheck,
            title: "護欄過濾",
            desc: "合規檢核\n確保無幻覺"
        }
    ];

    // --- State for Section 2: Quality Simulation Loop ---
    const [qualityMode, setQualityMode] = useState<'high' | 'low'>('high');

    useEffect(() => {
        const interval = setInterval(() => {
            setQualityMode(prev => prev === 'high' ? 'low' : 'high');
        }, 2500); // Speed up: Switch every 2.5 seconds
        return () => clearInterval(interval);
    }, []);

    const qualityInputs = [
        { icon: Users, title: "專家規則", desc: "Expert Rules" },
        { icon: BrainCircuit, title: "LLM Judges", desc: "專業/風格/錯亂" },
        { icon: Ruler, title: "NLP Metrics", desc: "Precision/ROUGE" },
    ];

    // Dynamic styles based on quality mode
    const isHigh = qualityMode === 'high';
    const themeColor = isHigh ? 'text-emerald-400' : 'text-amber-400';
    const borderColor = isHigh ? 'border-emerald-500/50' : 'border-amber-500/50';
    const glowColor = isHigh ? 'bg-emerald-500' : 'bg-amber-500';
    const shadowColor = isHigh ? 'shadow-emerald-500/20' : 'shadow-amber-500/20';

    return (
        <div className="bg-gray-900 text-white">
            <style>{`
                @keyframes data-flow {
                    0% { stroke-dashoffset: 24; }
                    100% { stroke-dashoffset: 0; }
                }
                .animate-data-flow {
                    animation: data-flow 0.8s linear infinite;
                }
                @keyframes ripple-ping {
                    0% { transform: scale(0.8); opacity: 0.8; }
                    100% { transform: scale(2.0); opacity: 0; }
                }
                .animate-ripple {
                    animation: ripple-ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
                }
                .transition-theme {
                    transition: all 0.5s ease-in-out;
                }
            `}</style>

            {/* Section 1: 4-Layer Pipeline with Sequential Loop */}
            <section className="min-h-screen flex flex-col justify-center relative overflow-hidden py-24 snap-start">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
                    <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-brand-500 rounded-full blur-[100px]"></div>
                    <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-500 rounded-full blur-[120px]"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-900/50 text-brand-400 text-base font-medium border border-brand-500/30 mb-6 backdrop-blur-sm">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-500"></span>
                            </span>
                            Dynamic Filtering Process
                        </div>
                        <h2 className="text-5xl md:text-6xl font-bold mb-8">4-Layer 精煉架構</h2>
                        <p className="text-gray-400 text-2xl max-w-3xl mx-auto leading-relaxed">
                            從雜亂日誌到完整報告，資料流經四道精密工序。
                        </p>
                    </div>

                    {/* The Full Pipeline Visual */}
                    <div className="flex flex-col lg:flex-row items-center justify-center gap-0 max-w-[110rem] mx-auto px-4 w-full">
                        
                        {/* INPUT NODE */}
                        <div className={`flex-shrink-0 flex flex-col items-center gap-4 transition-all duration-300 z-20 ${pipelineStep === 0 ? 'opacity-100 scale-110' : 'opacity-60 scale-100'}`}>
                            <div className={`w-24 h-24 rounded-full bg-gray-800 border-2 flex items-center justify-center shadow-xl transition-colors duration-300 ${pipelineStep === 0 ? 'border-brand-400 text-white shadow-brand-500/50' : 'border-gray-600 text-gray-400'}`}>
                                <Database size={40} />
                            </div>
                            <span className={`text-base font-mono font-bold transition-colors duration-300 ${pipelineStep === 0 ? 'text-brand-400' : 'text-gray-500'}`}>RAW DATA</span>
                        </div>

                        {/* Connector 1 */}
                        <div className="flex-shrink-0 flex items-center justify-center lg:w-16 lg:h-auto w-auto h-20 relative">
                             <div className="hidden lg:block w-full h-[4px] relative overflow-hidden">
                                 <div className="absolute inset-0 top-1/2 -translate-y-1/2 border-t-[4px] border-dashed border-gray-700"></div>
                                 <div className={`absolute inset-0 top-1/2 -translate-y-1/2 border-t-[4px] border-dashed border-brand-500 transition-opacity duration-200 ${pipelineStep === 0 ? 'opacity-100 animate-data-flow' : 'opacity-0'}`}></div>
                             </div>
                             <div className="lg:hidden h-full w-[4px] relative overflow-hidden">
                                 <div className="absolute inset-0 left-1/2 -translate-x-1/2 border-l-[4px] border-dashed border-gray-700"></div>
                                 <div className={`absolute inset-0 left-1/2 -translate-x-1/2 border-l-[4px] border-dashed border-brand-500 transition-opacity duration-200 ${pipelineStep === 0 ? 'opacity-100 animate-data-flow' : 'opacity-0'}`}></div>
                             </div>
                        </div>

                        {/* THE 4 LAYERS - Flexbox container for dynamic width */}
                        <div className="flex flex-col lg:flex-row w-full lg:flex-1 items-center lg:items-stretch gap-8 lg:gap-0">
                            {layers.map((layer, index) => {
                                const isActive = pipelineStep === index + 1;
                                return (
                                    <React.Fragment key={index}>
                                        <div className="relative group w-full lg:w-auto lg:flex-1 z-10 min-w-0">
                                            {/* Active State Glow */}
                                            <div className={`absolute -inset-1 bg-brand-500/30 rounded-2xl blur-lg transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`}></div>
                                            
                                            <div className={`relative bg-gray-800/80 backdrop-blur-md border-2 p-8 rounded-3xl transition-all duration-300 flex flex-col items-center text-center shadow-xl min-h-[280px] h-full justify-center ${isActive ? 'border-brand-500 -translate-y-2 shadow-brand-500/20' : 'border-gray-700'}`}>
                                                <div className={`w-20 h-20 rounded-2xl border-2 flex items-center justify-center mb-8 transition-colors duration-300 ${isActive ? 'bg-brand-500 text-white border-brand-400' : 'bg-gray-900 border-brand-500/30 text-brand-400'}`}>
                                                    <layer.icon size={40} />
                                                </div>
                                                <h3 className={`text-3xl font-bold mb-5 transition-colors duration-300 ${isActive ? 'text-white' : 'text-gray-300'}`}>{layer.title}</h3>
                                                <p className="text-gray-400 text-xl leading-relaxed whitespace-pre-line">{layer.desc}</p>
                                            </div>
                                            
                                            {/* Number Badge */}
                                            <div className={`absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full border-2 text-base flex items-center justify-center font-mono font-bold transition-all duration-300 ${isActive ? 'bg-brand-500 border-white text-white scale-110' : 'bg-gray-900 border-gray-600 text-gray-400'}`}>
                                                {index + 1}
                                            </div>
                                        </div>

                                        {/* Connector between layers */}
                                        {index < layers.length - 1 && (
                                            <div className="flex-shrink-0 flex items-center justify-center lg:w-16 lg:h-auto w-auto h-20 relative">
                                                 <div className="hidden lg:block w-full h-[4px] relative overflow-hidden">
                                                     <div className="absolute inset-0 top-1/2 -translate-y-1/2 border-t-[4px] border-dashed border-gray-700"></div>
                                                     <div className={`absolute inset-0 top-1/2 -translate-y-1/2 border-t-[4px] border-dashed border-brand-500 transition-opacity duration-200 ${isActive ? 'opacity-100 animate-data-flow' : 'opacity-0'}`}></div>
                                                 </div>
                                                 <div className="lg:hidden h-full w-[4px] relative overflow-hidden">
                                                     <div className="absolute inset-0 left-1/2 -translate-x-1/2 border-l-[4px] border-dashed border-gray-700"></div>
                                                     <div className={`absolute inset-0 left-1/2 -translate-x-1/2 border-l-[4px] border-dashed border-brand-500 transition-opacity duration-200 ${isActive ? 'opacity-100 animate-data-flow' : 'opacity-0'}`}></div>
                                                 </div>
                                            </div>
                                        )}
                                    </React.Fragment>
                                );
                            })}
                        </div>

                        {/* Final Connector */}
                        <div className="flex-shrink-0 flex items-center justify-center lg:w-16 lg:h-auto w-auto h-20 relative">
                             <div className="hidden lg:block w-full h-[4px] relative overflow-hidden">
                                 <div className="absolute inset-0 top-1/2 -translate-y-1/2 border-t-[4px] border-dashed border-gray-700"></div>
                                 <div className={`absolute inset-0 top-1/2 -translate-y-1/2 border-t-[4px] border-dashed border-brand-500 transition-opacity duration-200 ${pipelineStep === 4 ? 'opacity-100 animate-data-flow' : 'opacity-0'}`}></div>
                             </div>
                             <div className="lg:hidden h-full w-[4px] relative overflow-hidden">
                                 <div className="absolute inset-0 left-1/2 -translate-x-1/2 border-l-[4px] border-dashed border-gray-700"></div>
                                 <div className={`absolute inset-0 left-1/2 -translate-x-1/2 border-l-[4px] border-dashed border-brand-500 transition-opacity duration-200 ${pipelineStep === 4 ? 'opacity-100 animate-data-flow' : 'opacity-0'}`}></div>
                             </div>
                        </div>

                        {/* OUTPUT NODE */}
                        <div className={`flex-shrink-0 flex flex-col items-center gap-4 transition-all duration-300 z-20 ${pipelineStep === 5 ? 'opacity-100 scale-110' : 'opacity-60 scale-100'}`}>
                            <div className={`w-24 h-24 rounded-full border-2 flex items-center justify-center shadow-xl transition-colors duration-300 ${pipelineStep === 5 ? 'bg-brand-900/30 border-brand-400 text-brand-400 shadow-brand-500/50' : 'bg-gray-800 border-gray-600 text-gray-500'}`}>
                                <FileCheck size={40} />
                            </div>
                            <span className={`text-base font-mono font-bold transition-colors duration-300 ${pipelineStep === 5 ? 'text-brand-400' : 'text-gray-500'}`}>REPORT</span>
                        </div>

                    </div>
                </div>
            </section>

            {/* Section 2: Quality Model (Interactive Simulation) */}
            <section className="min-h-screen flex items-center relative overflow-hidden py-16 border-t border-gray-800 snap-start bg-gray-900/50">
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                     <svg className="w-full h-full">
                        <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                            <circle cx="2" cy="2" r="1" fill={isHigh ? "#34d399" : "#fbbf24"} className="transition-all duration-500" />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#grid-pattern)" />
                     </svg>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-[120rem] mx-auto">
                        <div className="text-center mb-16">
                            <div className={`inline-block px-5 py-2 rounded-full text-base font-bold mb-8 border backdrop-blur-sm transition-all duration-500 ${isHigh ? 'bg-emerald-900/30 text-emerald-300 border-emerald-500/30' : 'bg-amber-900/30 text-amber-300 border-amber-500/30'}`}>
                                <span className="flex items-center gap-2">
                                    <Activity size={20} className="animate-pulse" />
                                    Live Scoring Simulation
                                </span>
                            </div>
                            <h2 className="text-5xl md:text-6xl font-bold mb-8">品質預測模型</h2>
                            <p className="text-gray-300 max-w-5xl mx-auto text-2xl">
                                模型即時監控產出品質，針對不同AI生成報告內容進行多維度評分與預測。
                            </p>
                        </div>

                        {/* Layout: Input Report -> Features -> Output Score */}
                        <div className="flex flex-col md:flex-row items-center justify-center gap-0 md:gap-20 relative">
                            
                            {/* 1. LEFT: REPORT CANDIDATE (INPUT) */}
                            <div className="z-20 relative w-full md:w-[32rem]">
                                <div className={`relative bg-gray-800/90 backdrop-blur-md p-8 rounded-3xl border-2 transition-all duration-500 flex flex-col items-center text-center shadow-xl min-h-[360px] justify-center ${borderColor} ${shadowColor}`}>
                                    <div className={`w-24 h-24 rounded-full mb-8 flex items-center justify-center transition-all duration-500 ${isHigh ? 'bg-emerald-900/50 text-emerald-400' : 'bg-amber-900/50 text-amber-400'}`}>
                                        {isHigh ? <FileCheck size={48} /> : <FileWarning size={48} />}
                                    </div>
                                    <h3 className={`text-3xl font-bold mb-2 transition-colors duration-500 whitespace-nowrap ${themeColor}`}>
                                        {isHigh ? "高品質AI報告" : "低品質AI報告"}
                                    </h3>
                                    <p className="text-base text-gray-400 font-mono mb-8">Input Candidate</p>
                                    
                                    {/* Simulated Content Lines */}
                                    <div className="w-full space-y-4 opacity-50">
                                        <div className={`h-3 rounded w-3/4 mx-auto ${glowColor}`}></div>
                                        <div className={`h-3 rounded w-full ${glowColor}`}></div>
                                        <div className={`h-3 rounded w-5/6 mx-auto ${glowColor}`}></div>
                                    </div>
                                </div>
                            </div>

                            {/* CONNECTOR SVG 1: LEFT TO MIDDLE */}
                            <div className="hidden md:block w-40 h-[370px] relative opacity-80">
                                <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 160 370">
                                    <defs>
                                        <linearGradient id="gradInput" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor={isHigh ? "#34d399" : "#fbbf24"} stopOpacity="0.1" />
                                            <stop offset="100%" stopColor={isHigh ? "#34d399" : "#fbbf24"} stopOpacity="1" />
                                        </linearGradient>
                                    </defs>
                                    {/* Updated Paths for taller container */}
                                    <path d="M0 185 C 80 185, 80 56, 160 56" fill="none" stroke="url(#gradInput)" strokeWidth="4" strokeDasharray="8 8" className="animate-data-flow transition-colors duration-500" />
                                    <path d="M0 185 C 80 185, 80 185, 160 185" fill="none" stroke="url(#gradInput)" strokeWidth="4" strokeDasharray="8 8" className="animate-data-flow transition-colors duration-500" style={{ animationDelay: '0.1s' }}/>
                                    <path d="M0 185 C 80 185, 80 314, 160 314" fill="none" stroke="url(#gradInput)" strokeWidth="4" strokeDasharray="8 8" className="animate-data-flow transition-colors duration-500" style={{ animationDelay: '0.2s' }}/>
                                </svg>
                            </div>

                            {/* Mobile Connector */}
                            <div className={`md:hidden h-10 w-2 my-4 transition-colors duration-500 ${glowColor}`}></div>

                            {/* 2. CENTER: 3 FEATURES */}
                            <div className="flex flex-col gap-4 z-10 w-full md:w-auto">
                                {qualityInputs.map((input, idx) => (
                                    <div key={idx} className={`bg-gray-800/90 backdrop-blur-md p-6 pr-8 rounded-2xl border transition-all duration-500 flex items-center gap-6 w-full md:w-[28rem] shadow-lg h-28 ${borderColor} ${shadowColor}`}>
                                        <div className={`p-4 rounded-xl bg-gray-900 shadow-inner transition-colors duration-500 ${themeColor}`}>
                                            <input.icon size={30} />
                                        </div>
                                        <div className="flex-1">
                                            <div className={`text-xl font-bold mb-1 transition-colors duration-500 ${themeColor}`}>{input.title}</div>
                                            <div className="text-sm text-gray-500 font-mono">{input.desc}</div>
                                        </div>
                                        
                                        {/* Status Light */}
                                        <div className={`w-4 h-4 rounded-full transition-all duration-500 ${isHigh ? 'bg-emerald-500 shadow-[0_0_15px_#10b981]' : 'bg-amber-500 shadow-[0_0_15px_#f59e0b]'}`}></div>
                                    </div>
                                ))}
                            </div>

                            {/* CONNECTOR SVG 2: MIDDLE TO RIGHT */}
                            <div className="hidden md:block w-40 h-[370px] relative opacity-80">
                                <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 160 370">
                                    <defs>
                                        <linearGradient id="gradOutput" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor={isHigh ? "#34d399" : "#fbbf24"} stopOpacity="0.1" />
                                            <stop offset="100%" stopColor={isHigh ? "#34d399" : "#fbbf24"} stopOpacity="1" />
                                        </linearGradient>
                                    </defs>
                                    <path d="M0 56 C 80 56, 80 185, 160 185" fill="none" stroke="url(#gradOutput)" strokeWidth="4" strokeDasharray="8 8" className="animate-data-flow transition-colors duration-500" style={{ animationDelay: '0.3s' }}/>
                                    <path d="M0 185 C 80 185, 80 185, 160 185" fill="none" stroke="url(#gradOutput)" strokeWidth="4" strokeDasharray="8 8" className="animate-data-flow transition-colors duration-500" style={{ animationDelay: '0.4s' }}/>
                                    <path d="M0 314 C 80 314, 80 185, 160 185" fill="none" stroke="url(#gradOutput)" strokeWidth="4" strokeDasharray="8 8" className="animate-data-flow transition-colors duration-500" style={{ animationDelay: '0.5s' }}/>
                                </svg>
                                
                                {/* Pulse travelling to center */}
                                <div className={`absolute top-1/2 right-[-8px] -translate-y-1/2 w-6 h-6 rounded-full z-20 animate-pulse transition-colors duration-500 ${glowColor} shadow-[0_0_20px_currentColor]`}></div>
                            </div>

                            {/* Mobile Connector */}
                            <div className={`md:hidden h-10 w-2 my-4 transition-colors duration-500 ${glowColor}`}></div>

                            {/* 3. RIGHT: FINAL SCORE (OUTPUT) */}
                            <div className="z-10 relative w-full md:w-[32rem]">
                                {/* Ripple Effects */}
                                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-3xl animate-ripple transition-colors duration-500 ${isHigh ? 'bg-emerald-500/20' : 'bg-amber-500/20'}`}></div>

                                <div className={`bg-gray-800/90 backdrop-blur-md p-8 rounded-3xl border flex flex-col items-center text-center relative overflow-hidden min-h-[360px] justify-center transition-all duration-500 ${borderColor} ${shadowColor}`}>
                                    
                                    <div className={`w-32 h-32 rounded-full border-[6px] flex items-center justify-center mb-8 shadow-2xl z-10 transition-all duration-500 ${isHigh ? 'bg-emerald-900/50 border-emerald-400 text-emerald-300' : 'bg-amber-900/50 border-amber-400 text-amber-300'}`}>
                                        <span className="text-5xl font-bold font-mono">{isHigh ? "98%" : "59%"}</span>
                                    </div>
                                    
                                    <h3 className={`text-3xl font-bold mb-2 z-10 whitespace-nowrap transition-colors duration-500 ${themeColor}`}>預測滿意度</h3>
                                    <p className={`text-xl font-medium mb-6 z-10 transition-colors duration-500 ${themeColor}`}>
                                        {isHigh ? "Excellent Quality" : "Needs Improvement"}
                                    </p>
                                    
                                    <div className="w-full bg-gray-700/50 rounded-full h-5 mb-5 overflow-hidden">
                                        <div className={`h-full transition-all duration-500 w-[${isHigh ? '98%' : '45%'}] ${glowColor}`}></div>
                                    </div>
                                    <div className="flex justify-between w-full text-lg font-mono text-gray-400">
                                        <span>Threshold</span>
                                        <span className={`font-bold transition-colors duration-500 ${themeColor}`}>70%</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};