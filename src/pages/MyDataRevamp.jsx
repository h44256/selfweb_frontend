import styles from "../css/projectdetail.module.css";
import { Link } from "react-router-dom";

function MyDataRevamp() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>MyData 前台網站改版專案</h1>
        <img className={styles.image} src="/Riease.jpg" alt="MyData Revamp" />

        <p className={styles.description}>
          本專案為公司 MyData 前台網站的改版與重製工程，
          旨在優化整體使用者體驗與系統效能。 除了全面更新網站 UI
          設計外，也針對原有系統中存在的效能瓶頸進行改善。
        </p>

        <p className={styles.description}>
          舊版系統的資料流程採用由 Server 端一次性輸出大量資料至 Client 端，
          再由前端進行渲染的做法，造成資源浪費與使用者操作延遲。
          此次改版則重新設計資料傳遞架構， 改為由 Client 端透過 API
          動態請求所需資料， 由 Server 回應對應資訊，
          有效提升頁面載入速度與操作流暢度，大幅改善使用者體驗。
        </p>

        <h2 className={styles.subtitle}>🧩 專案重構重點</h2>
        <ol className={styles.orderedList}>
          <li>前端 UI/UX 全面翻新，提升網站視覺一致性與易用性</li>
          <li>原有後端資料處理邏輯進行重構，優化資料查詢與輸出效能</li>
          <li>實施 API-based 資料存取機制，改善效能表現</li>
        </ol>

        <h2 className={styles.subtitle}>✅ 專案成效與影響</h2>
        <p className={styles.description}>
          本次改版後，網站整體載入效率與互動體驗顯著提升，
          成功解決原有系統效能瓶頸，並建立更現代化的技術基礎架構。
        </p>
        <p className={styles.description}>
          由於專案業務需求龐大，開發期間也動員其他專案的同仁支援。
          我在此次多部門協作中，積極溝通與整合意見，
          也累積了寶貴的跨團隊合作經驗。
        </p>

        <h2 className={styles.subtitle}>💻 使用語言與開發環境</h2>
        <ul className={styles.features}>
          <li>前端：JavaScript</li>
          <li>模板引擎：Thymeleaf</li>
          <li>資料庫：PostgreSQL</li>
        </ul>

        <a
          href="https://mega.nz/folder/tLNSFaaD#bLZTZL1T-Z3rsyj2APIc_Q/folder/sb8F2aaD"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.buttonMega}
        >
          查看睿鍶工作專案資訊
        </a>
        <Link to="/" className={styles.backLink}>
          ← 回首頁
        </Link>
      </div>
    </div>
  );
}

export default MyDataRevamp;
