import styles from "../css/projectdetail.module.css";
import { Link } from "react-router-dom";

function BootLoader() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>BootLoader 專案介紹</h1>
        <img
          className={styles.image}
          src="/surpreme.png"
          alt="BootLoader 專案圖片"
        />
        <p className={styles.description}>
          本專案為嵌入式系統開機管理器，使用 C++ 編寫，配合 CAN Bus 通訊協議與
          MCU Flash 寫入流程。
        </p>
        <ul className={styles.features}>
          <li>📦 開機階段裝置選擇與載入流程</li>
          <li>🛠 使用 C++ 開發並與 QT UI 介面整合</li>
          <li>🔌 支援多種通訊協議（CAN / RS485）</li>
          <li>💾 實作 OTA 韌體升級機制</li>
        </ul>
        <a
          href="https://github.com/yourname/bootloader"
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

export default BootLoader;
