import styles from "../css/projectdetail.module.css";
import { Link } from "react-router-dom";

function LoginAlert() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>會員登入異常警示機制專案</h1>
        <img
          className={styles.image}
          src="/placeholder.png"
          alt="Login Alert"
        />

        <p className={styles.description}>
          本專案目標為於資料後台系統中建置一套{" "}
          <strong>會員登入異常警示信通知機制</strong>，
          當使用者帳號發生異常登入情況時，系統可即時發送警示信件，
          提升資安防護層級與帳號使用安全性。
        </p>

        <h2 className={styles.subtitle}>🔐 資安技術與資料保護機制</h2>
        <ol className={styles.orderedList}>
          <li>
            <strong>AES/GCM 模式</strong> 的對稱式加密與解密流程
          </li>
          <li>
            <strong>BASE64 編碼</strong> 與 <strong>UUID 隨機亂數生成</strong>
          </li>
          <li>
            使用 <strong>SHA-256 雜湊演算法</strong> 對關鍵資料進行安全處理
          </li>
          <li>
            將加密資料以 <strong>JWE（JSON Web Encryption）格式</strong> 儲存於{" "}
            <strong>LocalStorage</strong>
          </li>
          <li>結合前端機制進行資料解密與驗證，實作完整的前後端資料保護流程</li>
        </ol>

        <p className={styles.description}>
          本專案除後端以 <strong>Java</strong> 與 <strong>Spring Boot</strong>{" "}
          撰寫外， 也因應 LocalStorage 操作需求，首次實際撰寫{" "}
          <strong>JavaScript 前端程式碼</strong>，
          拓展了我在前端領域的技術視野。
        </p>

        <h2 className={styles.subtitle}>✅ 專案成效與影響</h2>
        <p className={styles.description}>
          本功能成功實作後，使後台系統具備異常行為即時警示能力，
          強化了使用者帳號的防護層級。
        </p>
        <p className={styles.description}>
          此外，在專案開發過程中，我不僅按時完成自己負責的任務，
          亦主動承接同事階段性無法完成的功能模組， 秉持「
          <strong>鍥而不捨、永不放棄</strong>」的態度，
          持續追蹤問題並成功解決技術瓶頸，
          確保專案順利交付，展現出良好的團隊協作與任務承擔能力。
        </p>

        <h2 className={styles.subtitle}>💻 使用語言與開發環境</h2>
        <ul className={styles.features}>
          <li>使用語言：Java、JavaScript</li>
          <li>框架：Spring Boot</li>
          <li>加密技術：AES-GCM、SHA-256、JWE</li>
          <li>前端儲存機制：LocalStorage</li>
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

export default LoginAlert;
