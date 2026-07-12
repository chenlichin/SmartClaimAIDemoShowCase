# SmartClaim AI Demo Showcase

<img width="731" height="434" alt="image" src="https://github.com/user-attachments/assets/c9868c64-6a52-4014-9dbc-be3a3433ab59" />

SmartClaim AI 是一個以產險理賠作業為情境設計的生成式 AI 專案，聚焦於理賠結案報告生成、資料比對、內容檢核與品質評估。

*本專案透過互動式前端模擬 AI 如何將分散的理賠案件資訊，轉換為結構完整、可追溯且便於人工覆核的結案報告。
*本專案為前端展示與概念驗證用途，畫面中的案件資料均為模擬內容，不代表實際保險案件或正式營運系統。

---

## 專案目標

傳統理賠報告撰寫通常需要人工查詢多個系統、彙整案件資訊、核對金額與事件紀錄，再依固定格式完成報告。
SmartClaim AI 展示一套更有效率的作業模式：
1. 彙整案件日誌與理賠資料
2. 萃取關鍵事件與重要欄位
3. 自動生成結案報告草稿
4. 提供來源資料比對
5. 透過規則與模型進行品質檢核
6. 保留人工確認與修訂流程

---

## 核心功能

### AI 理賠報告生成
使用者點擊「生成結案報告」後，系統會使用 AI 根據案件資訊產生完整報告內容，包括：
- 肇事人員
- 理賠費用
- etc

### 理賠資料比對小幫手

生成報告後，右側比對面板會同步呈現相關來源資料，例如：
- 診斷證明
- 醫療費用
- 肇責比例
- 和解資訊
- AI 生成內容來源

讓理賠人員不必在多個視窗間切換，即可快速確認報告內容與原始資料是否一致。

---

### 四層報告精煉流程
SmartClaim AI 將報告生成流程拆分為四個階段：

#### 1. 日誌初篩

過濾重複訊息與低價值內容，保留案件中的關鍵事件。

#### 2. 全局理解

串聯不同時間點與資料來源，理解案件脈絡、事件順序與因果關係。

#### 3. 報告生成

依照理賠報告格式與專業語氣，產生結構化報告草稿。

#### 4. 護欄過濾

檢查內容是否存在資訊錯置、來源不足、格式異常或可能的模型幻覺。

---

### 品質預測與評估

系統可透過多種方式評估 AI 生成品質：

- 專家規則
- LLM Judges
- NLP Metrics
- 欄位完整性檢查
- 來源一致性檢查
- 專業語氣與格式評估

藉此建立可量化、可持續優化的生成品質管理機制。

---

## 專案特色

- 一鍵生成理賠結案報告
- 自動彙整理賠案件關鍵資訊
- 提供報告與來源資料對照
- 降低人工查詢與複製貼上的負擔
- 以護欄機制降低模型幻覺風險
-  AI 報告品質評分流程


---

## 展示頁面操作流程

1. 進入 SmartClaim AI 展示頁面 (https://smartclaim-ai-showcase.ai.studio)
2. 點擊「生成結案報告」
3. 系統模擬 AI 生成完整報告
4. 生成完成後，自動開啟理賠資料比對面板
5. 使用者核對報告內容與來源資訊
6. 瀏覽核心功能與技術架構展示

---

## Author

**Chin Chen**

Product Owner / Business Analyst / Generative AI Solution Designer

Focus areas:

- Generative AI product development
- Financial and insurance AI applications
- AI governance
- Claim report generation
- Multimodal document understanding
- Enterprise AI solution design
