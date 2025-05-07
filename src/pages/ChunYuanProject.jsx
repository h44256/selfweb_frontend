import styles from "../css/projectdetail.module.css";
import { Link } from "react-router-dom";

function ChunYuanProject() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>土石方圖像辨識分析計算程式</h1>
        <img
          className={styles.image}
          src="/placeholder.png"
          alt="Chun Yuan Project"
        />
        <p className={styles.description}>
          本程式透過拍攝土石堆照片，結合 OpenCV
          辨識色塊與邊界，自動計算土石方面積與初步體積預估，協助現場工程紀錄與分析。
        </p>
        <ul className={styles.features}>
          <li>🖼 利用影像 HSV 轉換與輪廓偵測</li>
          <li>📐 自動標示邊界與面積文字</li>
          <li>📊 可匯出圖檔與數值報告</li>
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

export default ChunYuanProject;
