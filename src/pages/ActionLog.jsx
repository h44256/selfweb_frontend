import styles from "../css/projectdetail.module.css";
import { Link } from "react-router-dom";

function ActionLog() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>操作紀錄新增/查詢功能專案</h1>
        <img className={styles.image} src="/placeholder.png" alt="Action Log" />

        <p className={styles.description}>
          本專案目標為於資料後台系統中{" "}
          <strong>新增「操作新增紀錄/查詢功能」</strong>，
          以符合數位發展部針對資訊安全的規範，
          確保平台能追溯使用者於後台進行查詢等敏感操作的詳細紀錄。
        </p>

        <h2 className={styles.subtitle}>🛠 專案實作內容</h2>
        <ol className={styles.orderedList}>
          <li>於後台管理系統中設計並建置查詢紀錄的資料表</li>
          <li>
            於各主要查詢功能中導入紀錄機制，自動儲存使用者查詢動作與關鍵參數
          </li>
          <li>
            使用 <strong>Spring Boot</strong> 架構開發後端功能，資料庫採用{" "}
            <strong>PostgreSQL</strong>
          </li>
          <li>結合原有權限與日誌系統，確保操作紀錄具備一致性與安全性</li>
        </ol>

        <p className={styles.description}>
          此為我加入公司後參與的第一個正式專案， 也是我首次接觸{" "}
          <strong>Java</strong>、<strong>Spring Boot</strong> 與{" "}
          <strong>PostgreSQL</strong> 等技術。
          在專案初期，我花費大量時間主動學習相關技術與開發流程，
          並在短時間內融入團隊、跟上開發節奏，成功於時程內完成所有預定目標。
        </p>

        <h2 className={styles.subtitle}>✅ 專案成效與影響</h2>
        <p className={styles.description}>
          本功能上線後，後台系統正式具備查詢行為的稽核能力，
          <strong>強化了資料存取的可追蹤性與系統整體資安防護能力</strong>。
        </p>
        <p className={styles.description}>
          此外，透過此次專案，我不僅建立了後端開發的基本能力，
          也展現出學習與實作的主動性與韌性，
          獲得團隊肯定，並開始被賦予更具挑戰性的任務與專案責任。
        </p>

        <h2 className={styles.subtitle}>💻 使用語言與開發環境</h2>
        <ul className={styles.features}>
          <li>使用語言：Java</li>
          <li>框架：Spring Boot</li>
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

export default ActionLog;
