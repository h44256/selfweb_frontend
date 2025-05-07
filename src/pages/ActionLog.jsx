import styles from "../css/projectdetail.module.css";
import { Link } from "react-router-dom";

function ActionLog() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>操作紀錄新增／查詢功能</h1>
        <img className={styles.image} src="/placeholder.png" alt="Action Log" />
        <p className={styles.description}>
          為後台系統新增使用者操作紀錄功能，能追蹤資料 CRUD
          行為並提供時間範圍、條件查詢功能。
        </p>
        <ul className={styles.features}>
          <li>🗃 記錄新增、修改、刪除行為</li>
          <li>🔍 支援依使用者/模組查詢</li>
          <li>🧾 匯出查詢結果為 CSV</li>
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
export default ActionLog;
