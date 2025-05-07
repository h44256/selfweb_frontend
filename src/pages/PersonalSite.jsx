import styles from "../css/projectdetail.module.css";
import { Link } from "react-router-dom";

function PersonalSite() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>個人網站</h1>
        <img
          className={styles.image}
          src="/placeholder.png"
          alt="Personal Site"
        />
        <p className={styles.description}>
          使用 React + Express
          全端架構開發，展示個人專案與開源作品，並整合部落格、聯絡方式等功能。
        </p>
        <ul className={styles.features}>
          <li>🌐 前端使用 React + Vite</li>
          <li>🚀 後端 Express API + MongoDB</li>
          <li>🖼 整合 AI 圖片產生展示區</li>
        </ul>
        <a
          href="https://github.com/placeholder"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button}
        >
          查看 GitHub 原始碼
        </a>
        <Link to="/" className={styles.backLink}>
          ← 回首頁
        </Link>
      </div>
    </div>
  );
}
export default PersonalSite;
