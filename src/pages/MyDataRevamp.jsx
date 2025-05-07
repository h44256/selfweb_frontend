import styles from "../css/projectdetail.module.css";
import { Link } from "react-router-dom";

function MyDataRevamp() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>MyData 前台網站重製改版</h1>
        <img className={styles.image} src="/placeholder.png" alt="MyData" />
        <p className={styles.description}>
          將 MyData 官方網站前端以 React
          架構重新設計，強化使用者體驗與模組化開發維護彈性。
        </p>
        <ul className={styles.features}>
          <li>🎨 使用 Vite + React 開發 SPA</li>
          <li>📐 RWD 響應式版型調整</li>
          <li>⚙️ 後台 API 串接 + Axios 管理</li>
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
export default MyDataRevamp;
