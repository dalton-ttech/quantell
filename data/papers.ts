import { Paper } from '../types';

export const papersEN: Paper[] = [
  {
    id: 'p-04',
    title: "Programmable Capital: The Structural Convergence of Quantitative Science and Web3 Finance",
    category: "WEB3 FINANCE",
    date: "FEB 2024",
    abstract: "Migrating value to programmable blockchains shifts finance from asynchronous reconciliation to atomic settlement, creating a new high-fidelity data environment for quantitative science.",
    content: [
      "The Ledger Revolution: Beyond Digital Assets. For the past century, global finance has operated on a fragmented architecture of siloed ledgers. Whether it is a cross-border remittance via SWIFT or the clearing of a complex derivative on an exchange, the system relies on a \"handshake\" between disparate, private databases. This fragmentation creates structural frictions: settlement delays, counterparty risks, and massive capital inefficiencies.",
      "Web3 finance, at its core, is not about the tokens it generates, but about the ledger revolution it enables. By migrating value to public, programmable blockchains, we are moving from a world of \"asynchronous reconciliation\" to a world of \"atomic, deterministic settlement.\" For quantitative institutions like Quantell, this represents the most significant shift in market microstructure since the advent of electronic trading.",
      "The Inversion of Financial Middleware. The traditional financial stack is built on a hierarchy of intermediaries—correspondent banks, custodians, and clearinghouses—each adding a layer of cost and latency. Web3 inverts this model. Instead of institutions needing to integrate with hundreds of localized systems, every participant integrates with a single, global, interoperable protocol.",
      "This is the \"Internet Moment\" for capital. Just as TCP/IP abstracted away the complexities of networking to allow data to flow globally, smart contracts are abstracting away the legal and operational complexities of financial agreements. When liquidity becomes programmable, it ceases to be a static entry in a bank’s database and becomes a dynamic, yield-seeking agent. At Quantell, we view this as an opportunity to apply quantitative science to a more transparent, high-fidelity data environment where the \"rules of the game\" are encoded in immutable logic rather than opaque institutional policies.",
      "Real-Time Transparency and the Death of \"T+2\" Blindness. The traditional \"T+2\" settlement cycle is essentially a multi-day period of institutional blindness. During this lag, risk is managed through collateral buffers and complex credit arrangements. Web3 finance eliminates this lag through Atomic Settlement—the simultaneous exchange of assets.",
      "For quantitative strategies, this transparency is transformative. In legacy markets, \"True Liquidity\" is often obscured by shadow banking and off-balance-sheet activities. On-chain finance provides a real-time view of collateralization ratios, protocol health, and liquidity flows. This allows for a more granular assessment of systemic risk. We are moving from \"Trust-based Finance\" (relying on an institution's reputation) to \"Verification-based Finance\" (relying on the mathematical proof of the ledger).",
      "The Convergence: Institutional DeFi and ZK-Privacy. The primary obstacle to the wholesale institutional adoption of Web3 has been the tension between public transparency and the need for commercial privacy. However, a quiet revolution in Zero-Knowledge (ZK) cryptography is solving this dilemma. ZK-proofs allow institutions to prove compliance, solvency, and trade execution without leaking proprietary strategies or sensitive counterparty data.",
      "As these technologies mature, we expect to see a convergence: the efficiency of decentralized protocols merged with the regulatory rigor of institutional finance. This \"Institutional DeFi\" will not look like the wild west of 2020; it will be characterized by permissioned liquidity pools, programmatic compliance, and cross-chain interoperability.",
      "Creative Destruction and the Quantitative Frontier. The transition to a Web3-based financial system will be characterized by \"creative destruction.\" Legacy business models built on exploiting settlement delays and information asymmetry will face obsolescence. Conversely, those who can navigate the complexities of smart contract risk and protocol governance will find a new frontier for alpha generation.",
      "For Quantell, this is not a speculative bet on \"crypto.\" It is a strategic alignment with the future of financial architecture. The convergence of quantitative science and programmable capital is inevitable. In this new regime, the winners will not be those with the largest balance sheets, but those with the most robust models and the deepest understanding of the code that now moves the world’s capital."
    ]
  },
  {
    id: 'p-01',
    title: "Asymptotic Behavior of Liquidity Pools in Fragmented Markets",
    category: "MARKET MICROSTRUCTURE",
    date: "OCT 2023",
    abstract: "Analyzing the stability of automated market makers under high volatility regimes using mean-field game theory.",
    content: [
      "In the rapidly evolving landscape of decentralized finance (DeFi), Automated Market Makers (AMMs) have emerged as a fundamental primitive for liquidity provisioning. However, the theoretical underpinnings of their stability under extreme volatility regimes remain under-explored. This paper investigates the asymptotic behavior of constant-product liquidity pools when subjected to fragmented liquidity across multiple venues.",
      "We model the interaction between arbitrageurs and liquidity providers (LPs) as a Mean-Field Game (MFG). Unlike traditional stochastic control models which assume a single dominant liquidity venue, our framework accounts for the fragmented nature of modern crypto-asset markets. By introducing a coupling term in the Hamilton-Jacobi-Bellman (HJB) equation, we capture the non-linear feedback loops that occur during liquidity crunches.",
      "Our empirical analysis, based on tick-level data from the 2022-2023 volatility clusters, reveals a distinct phase transition. When the volatility parameter σ exceeds a critical threshold σ_c, the Nash equilibrium for LPs shifts from 'passive provision' to 'strategic withdrawal'. This phenomenon, which we term 'Liquidity Evaporation Phase Transition' (LEPT), mathematically explains the sudden widening of spreads observed in stressed markets.",
      "Furthermore, we propose a modified bonding curve mechanism, the 'Adaptive Curvature Invariant', which dynamically adjusts the slippage tolerance based on real-time volatility estimation. Simulation results indicate that this mechanism reduces Impermanent Loss (IL) by approximately 14% while maintaining capital efficiency comparable to Uniswap V3 models.",
      "Conclusion: The integration of mean-field approximations into AMM design offers a robust pathway for mitigating systemic risk. Future work will focus on extending this model to include jump-diffusion processes to better account for black swan events."
    ]
  },
  {
    id: 'p-02',
    title: "Non-Linear Dependence in Cross-Asset Correlations",
    category: "RISK MANAGEMENT",
    date: "AUG 2023",
    abstract: "A copula-based approach to modeling tail risk dependencies during black swan events.",
    content: [
      "Traditional portfolio theory often relies on Pearson correlation coefficients, which fail to capture the dependency structure between assets during extreme market downturns. This paper introduces a Vine Copula approach to model the non-linear dependence between traditional equities and digital assets.",
      "By isolating the lower tail dependence, we demonstrate that diversification benefits often overstated by linear models tend to collapse exactly when they are needed most. We construct a 'Tail-Risk Hedge' portfolio that utilizes this asymmetry to generate alpha during liquidation events."
    ]
  },
  {
    id: 'p-03',
    title: "Transformer Architectures for Time-Series Forecasting",
    category: "MACHINE LEARNING",
    date: "JUN 2023",
    abstract: "Adapting large language model attention mechanisms to identify long-range dependencies in price action.",
    content: [
      "The success of Transformer architectures in Natural Language Processing (NLP) suggests potential applications in financial time-series forecasting. However, financial data lacks the semantic structure of language. We propose a 'Temporal Attention Mechanism' specifically designed for high-frequency price data.",
      "Our model replaces the positional encoding standard in BERT with a 'Volatility-Adjusted Time Encoding'. This allows the attention heads to focus not just on sequential proximity, but on 'regime proximity', effectively linking similar market states across vast temporal distances."
    ]
  }
];

export const papersCN: Paper[] = [
  {
    id: 'p-04',
    title: "可編程資本：量化科學與 Web3 金融的結構性收斂",
    category: "WEB3 金融",
    date: "2024年2月",
    abstract: "將價值遷移到可編程區塊鏈將金融從異步對賬轉變為原子結算，為量化科學創造了一個新的高保真數據環境。",
    content: [
      "賬本革命：超越數位資產。在過去的一個世紀裡，全球金融一直運作在支離破碎、相互隔離的賬本架構之上。無論是通過 SWIFT 進行的跨境匯款，還是交易所中複雜衍生品的清算，整個系統都依賴於不同私有數據庫之間的「握手」。這種碎片化創造了結構性的摩擦：結算延遲、交易對手風險以及巨大的資本效率低下。",
      "Web3 金融的核心不在於它所產生的代幣，而是在於它所實現的賬本革命。通過將價值遷移到公共、可編程的區塊鏈上，我們正從一個「異步對賬」的世界轉向一個「原子級、確定性結算」的世界。對於像量泰（Quantell）這樣的量化機構而言，這代表了自電子化交易問世以來，市場微觀結構最重大的轉變。",
      "金融中間件的反轉。傳統金融棧（Stack）建立在中間機構的層級體系之上——通訊行、託管商和清算所，每一層都增加了成本和延遲。Web3 反轉了這一模式。參與者不再需要與數百個本地化系統集成，而是直接與單一、全球、可互操作的協議進行對接。",
      "這是資本的「互聯網時刻」。正如 TCP/IP 協議抽象化了網絡的複雜性以允許數據在全球流動，智能合約正在抽象化金融協議的法律和操作複雜性。當流動性變得「可編程」，它就不再是銀行數據庫中的靜態分錄，而變成了動態的、自動尋求收益的代理（Agent）。在量泰，我們將此視為將量化科學應用於更透明、高保真數據環境的機會，在這裡，「遊戲規則」被編碼在不可篡改的邏輯中，而非晦澀的機構政策中。",
      "實時透明度與「T+2」盲區的終結。傳統的「T+2」結算週期本質上是數天的「機構盲區」。在這種延遲期間，風險通過抵押緩衝區和複雜的信貸安排進行管理。Web3 金融通過原子級結算（Atomic Settlement）——即資產的同步交換——消除了這種延遲。",
      "對於量化策略而言，這種透明度是顛覆性的。在傳統市場，「真實流動性」往往被影子銀行和資產負債表外活動所掩蓋。鏈上金融提供了一種關於抵押率、協議健康狀況和流動性流向的實時視圖。這使得對系統性風險的評估更加精確。我們正從「基於信任的金融」（依賴機構聲譽）轉向「基於驗證的金融」（依賴賬本的數學證明）。",
      "收斂點：機構級 DeFi 與 ZK 隱私。Web3 被機構大規模採用的主要障礙，在於公共透明度與商業隱私需求之間的緊張關係。然而，一場靜悄悄的零知識證明（ZK）密碼學革命正在解決這一難題。ZK 證明允許機構在不洩露專有策略或敏感對手數據的情況下，證明合規性、償付能力和交易執行。",
      "隨著這些技術的成熟，我們預計將看到一種收斂：去中心化協議的高效與機構金融的監管嚴謹性相結合。這種「機構級 DeFi」不會像 2020 年的荒野西部；它的特徵將是許可制流動性池（Permissioned pools）、程序化合規以及跨鏈互操作性。",
      "創造性破壞與量化新前沿。向 Web3 金融系統的轉型將伴隨著「創造性破壞」。那些建立在利用結算延遲和信息不對稱之上的傳統商業模式將面臨淘汰。相反，那些能夠駕馭智能合約風險和協議治理複雜性的人，將發現阿爾法生成的新前沿。",
      "對量泰而言，這不是對「加密貨幣」的投機性投注，而是對金融架構未來的戰略佈局。量化科學與可編程資本的收斂是不可逆轉的。在這個新秩序中，最終的贏家將不是那些擁有最大資產負債表的人，而是那些擁有最穩健模型、並對驅動全球資本流動的代碼理解最深的人。"
    ]
  },
  {
    id: 'p-01',
    title: "碎片化市場中流動性池的漸近行為",
    category: "市場微觀結構",
    date: "2023年10月",
    abstract: "利用平均場博弈論分析高波動環境下自動做市商（AMM）的穩定性。",
    content: [
      "在去中心化金融（DeFi）快速發展的格局中，自動做市商（AMM）已成為流動性提供的基礎原語。然而，它們在極端波動機制下的穩定性理論基礎仍未得到充分探索。本文研究了當流動性分散在多個場所時，恆定乘積流動性池的漸近行為。",
      "我們將套利者和流動性提供者（LP）之間的互動建模為平均場博弈（MFG）。與假設單一主導流動性場所的傳統隨機控制模型不同，我們的框架考慮了現代加密資產市場的碎片化性質。通過在哈密頓-雅可比-貝爾曼（HJB）方程中引入耦合項，我們捕捉了在流動性緊縮期間發生的非線性反饋循環。",
      "我們基於 2022-2023 年波動率集群的逐筆數據進行的實證分析揭示了一個明顯的相變。當波動率參數 σ 超過臨界閾值 σ_c 時，LP 的納什均衡從「被動提供」轉變為「策略性撤回」。這種現象，我們稱之為「流動性蒸發相變」（LEPT），從數學上解釋了在壓力市場中觀察到的價差突然擴大。",
      "此外，我們提出了一種修改後的聯合曲線機制，即「自適應曲率不變量」，它根據實時波動率估計動態調整滑點容忍度。仿真結果表明，該機制將無常損失（IL）降低了約 14%，同時保持了與 Uniswap V3 模型相當的資本效率。",
      "結論：將平均場近似集成到 AMM 設計中，為減輕系統性風險提供了一條穩健的途徑。未來的工作將側重於擴展該模型以包括跳躍擴散過程，以便更好地解釋黑天鵝事件。"
    ]
  },
  {
    id: 'p-02',
    title: "跨資產相關性中的非線性依賴",
    category: "風險管理",
    date: "2023年8月",
    abstract: "一種基於 Copula 函數的方法，用於建模黑天鵝事件期間的尾部風險依賴。",
    content: [
      "傳統的投資組合理論通常依賴皮爾遜相關係數，這無法捕捉極端市場低迷期間資產之間的依賴結構。本文介紹了一種 Vine Copula 方法來建模傳統股票和數字資產之間的非線性依賴。",
      "通過隔離下尾依賴，我們證明線性模型通常誇大的多元化收益往往在最需要它們的時候崩潰。我們構建了一個「尾部風險對沖」投資組合，利用這種不對稱性在清算事件中產生 Alpha。"
    ]
  },
  {
    id: 'p-03',
    title: "用於時間序列預測的 Transformer 架構",
    category: "機器學習",
    date: "2023年6月",
    abstract: "調整大語言模型注意力機制，以識別價格行為中的長程依賴關係。",
    content: [
      "Transformer 架構在自然語言處理（NLP）中的成功表明其在金融時間序列預測中的潛在應用。然而，金融數據缺乏語言的語義結構。我們提出了一種專為高頻價格數據設計的「時間注意力機制」。",
      "我們的模型用「波動率調整時間編碼」替換了 BERT 中的標準位置編碼。這使得注意力頭不僅關注順序鄰近性，而且關注「機制鄰近性」，有效地將巨大的時間距離上的相似市場狀態聯繫起來。"
    ]
  }
];