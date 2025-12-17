import React from 'react';
import { Shield, Menu, ArrowRight, Github } from 'lucide-react';
import { DemoInterface } from './components/DemoInterface';
import { TechArchitecture } from './components/TechArchitecture';
import { Features } from './components/Features';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-brand-100 selection:text-brand-900">
      
      {/* Navbar */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2 text-brand-600">
            <Shield size={28} />
            <span className="text-xl font-bold tracking-tight text-gray-900">SmartClaim <span className="text-brand-600">AI</span></span>
          </div>
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600">
            <a href="#demo" className="hover:text-brand-600 transition-colors">功能展示</a>
            <a href="#features" className="hover:text-brand-600 transition-colors">核心特色</a>
            <a href="#tech" className="hover:text-brand-600 transition-colors">技術架構</a>
            <button className="bg-brand-600 text-white px-5 py-2 rounded-full hover:bg-brand-700 transition-colors shadow-lg shadow-brand-500/30">
              預約 Demo
            </button>
          </div>
          <div className="md:hidden text-gray-600">
            <Menu size={24} />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="demo" className="min-h-screen flex items-center pt-16 relative overflow-hidden snap-start">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            
            <div className="lg:w-[40%] space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-sm font-medium border border-brand-100">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
                </span>
                AI 理賠報告生成引擎 v2.0
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.15]">
                一鍵生成，<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-emerald-500">報告秒出</span><br />
                資訊集成，<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-emerald-500">便利檢核</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                運用先進的 AI 技術，自動萃取理賠關鍵事件<br/> 從日誌初篩到報告生成，大幅降低 64% 作業時間
              </p>
              
              <div className="flex items-center gap-4">
                <button className="bg-brand-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-brand-700 transition-all shadow-xl shadow-brand-500/30 flex items-center gap-2 group">
                  立即體驗
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 rounded-lg font-bold text-gray-600 hover:bg-gray-100 transition-all border border-gray-200">
                  了解更多
                </button>
              </div>

              <div className="pt-4 flex items-center gap-6 text-gray-400 text-sm">
                 <div className="flex items-center gap-2">
                    <Shield size={16} className="text-brand-500"/> 企業級資安防護
                 </div>
                 <div className="flex items-center gap-2">
                    <Shield size={16} className="text-brand-500"/> 97% 服務使用率
                 </div>
                 <div className="flex items-center gap-2">
                    <Shield size={16} className="text-brand-500"/> 數百位理賠專家驗證
                 </div>
              </div>
            </div>

            {/* Interactive Demo Wrapper */}
            <div className="lg:w-[60%] w-full perspective-1000">
               <div className="transform rotate-y-[-5deg] rotate-x-[5deg] hover:rotate-0 transition-transform duration-700 ease-out preserve-3d">
                  <DemoInterface />
                  {/* Decorative blobs behind */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-brand-200/40 to-blue-200/40 blur-3xl -z-10 rounded-full"></div>
               </div>
            </div>

          </div>
        </div>
      </section>

      <div id="features">
        <Features />
      </div>
      
      <div id="tech">
        <TechArchitecture />
      </div>

      {/* CTA Section */}
      <section className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-brand-600 text-white snap-start">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6">準備好改變理賠流程了嗎？</h2>
          <p className="text-brand-100 text-lg mb-10 max-w-2xl mx-auto">
            立即加入數百位理賠專家的行列，體驗 AI 帶來的效率革命。
          </p>
          <button className="bg-white text-brand-700 px-10 py-4 rounded-full font-bold text-lg hover:bg-brand-50 transition-colors shadow-2xl">
            聯絡我們，也不會取得報價
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-12 snap-start">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 text-gray-900 mb-4 md:mb-0">
             <Shield size={24} className="text-brand-600" />
             <span className="font-bold text-lg">SmartClaim AI</span>
          </div>
          <div className="text-gray-500 text-sm">
            &copy; 2025 SmartClaim Tech. All rights reserved.
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;