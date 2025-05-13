import styles from "../css/projectdetail.module.css";
import { Link } from "react-router-dom";

function PersonalSite() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>個人網站建置專案</h1>
        <img className={styles.image} src="/site.png" alt="Personal Site" />

        <p className={styles.description}>
          為了記錄自己轉職為軟體工程師後的學習歷程與生活點滴，
          同時結合過去的網頁開發經驗，我決定從 0 開始打造一個專屬的個人網站，
          作為作品展示與自我成長紀錄的平台。
        </p>

        <p className={styles.description}>
          本專案使用 <strong>React</strong> 框架開發前端， 並以{" "}
          <strong>Node.js</strong> 與 <strong>Express</strong> 框架構建後端，
          資料庫使用 <strong>MySQL</strong>。網站部署於{" "}
          <strong>AWS Ubuntu 22.x LTS</strong> 上， 並使用{" "}
          <strong>Nginx</strong> 作為 Web
          伺服器，實現完整的前後端整合與對外公開存取。
        </p>

        <p className={styles.description}>
          這個網站的開發靈感，源自我在 <strong>Riease</strong>{" "}
          的第一份軟體相關工作。 當時以<strong>無程式背景</strong>
          加入團隊，主要參與的是小型維護與修正任務， 例如調整條件判斷式（如{" "}
          <code>if</code>/<code>else</code>{" "}
          條件錯誤、布林邏輯錯置等）或修改部分資料查詢邏輯。
          雖然接觸的範圍有限，仍讓我初步累積了程式設計的基礎認知。
          然而，也因為當時對整體系統架構與網路通訊概念理解尚淺，
          便萌生了更深入學習並補足這些知識的想法。
        </p>

        <p className={styles.description}>
          於是，我開始著手開發這個全端個人網站，透過實作將理論知識內化為實戰能力，
          同時也作為自我學習與職涯轉型的具體見證。
        </p>

        <h2 className={styles.subtitle}>🧩 網站功能包含</h2>
        <ol className={styles.orderedList}>
          <li>以 React 建構的單頁應用介面（SPA）；</li>
          <li>使用 Node.js + Express 撰寫的 RESTful API；</li>
          <li>與 MySQL 資料庫整合進行資料讀寫；</li>
          <li>部署於 AWS 雲端主機，並透過 Nginx 管理對外流量；</li>
          <li>做為個人學習歷程與作品展示平台，未來也會持續擴充功能與內容。</li>
        </ol>

        <div className={styles.buttonGroup}>
          <a
            href="https://github.com/h44256/selfweb_frontend"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.buttonGithub}
          >
            🔵 查看前端 GitHub 原始碼🔗
          </a>
          <a
            href="https://github.com/h44256/selfweb_backend"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.buttonGithub}
          >
            🟣 查看後端 GitHub 原始碼🔗
          </a>
        </div>

        <Link to="/" className={styles.backLink}>
          ← 回首頁
        </Link>
      </div>
    </div>
  );
}

export default PersonalSite;
