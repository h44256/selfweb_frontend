import styles from "../css/projectdetail.module.css";
import { Link } from "react-router-dom";

function BootLoader2() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>BootLoader 2.0</h1>
        <img
          className={styles.image}
          src="/placeholder.png"
          alt="BootLoader 2.0"
        />
        <p className={styles.description}>
          升級版 BootLoader 加入多模組韌體選擇與遠端更新功能，支援 OTA
          機制與錯誤回復流程。
        </p>
        <ul className={styles.features}>
          <li>🔁 多版本選擇與 fallback 機制</li>
          <li>📶 OTA 遠端韌體更新流程</li>
          <li>🛡 防止寫入錯誤與重試機制</li>
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
export default BootLoader2;
