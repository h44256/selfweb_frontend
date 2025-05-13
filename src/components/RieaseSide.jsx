import styles from "../css/card.module.css";
import { useState } from "react";

function RieaseSide() {
  const [hasInteracted, setHasInteracted] = useState(false);

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img className={styles.Riease} src="/Riease.jpg" alt="Riease logo" />
      </div>

      <div className={styles.projectLinks}>
        <p className={`${styles.sectionTitle} ${styles.sectionWork}`}>
          💼 工作經歷
        </p>

        <p className={styles.groupTitle}>🗃 後台系統開發</p>
        <p
          className={`${styles.linkHint} ${
            !hasInteracted ? styles.linkHintActive : ""
          }`}
        >
          👇 點擊以下文字可前往專案介紹頁面
        </p>
        <ul>
          <li>
            <a
              className={styles.linkBlock}
              href="/ActionLog"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.stopPropagation();
                setHasInteracted(true);
              }}
            >
              資料後台操作紀錄新增/查詢功能
            </a>
          </li>
          <li>
            <a
              className={styles.linkBlock}
              href="/LoginAlert"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.stopPropagation();
                setHasInteracted(true);
              }}
            >
              資料後台會員登入警示信系統
            </a>
          </li>
        </ul>

        <p className={styles.groupTitle}>🌐 前台網站開發</p>
        <ul>
          <li>
            <a
              className={styles.linkBlock}
              href="/MyDataRevamp"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.stopPropagation();
                setHasInteracted(true);
              }}
            >
              MyData 前台網站重製改版
            </a>
          </li>
        </ul>

        <p className={`${styles.sectionTitle} ${styles.sectionSide}`}>
          💡 Side Project
        </p>

        <p className={styles.groupTitle}>🚘 嵌入式專案</p>
        <ul>
          <li>
            <a
              className={styles.linkBlock}
              href="/Radar"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.stopPropagation();
                setHasInteracted(true);
              }}
            >
              簡易倒車雷達
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default RieaseSide;
