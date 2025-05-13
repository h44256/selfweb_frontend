import styles from "../css/card.module.css";
import { useState } from "react";

function ChunYuanSide() {
  const [hasInteracted, setHasInteracted] = useState(false);

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img
          className={styles.chunyuan}
          src="/chunyuan.jpg"
          alt="Chun Yuan logo"
        />
      </div>

      <div className={styles.projectLinks}>
        <p className={`${styles.sectionTitle} ${styles.sectionWork}`}>
          💼 工作經歷
        </p>

        <p className={styles.groupTitle}>🧠 圖像處理分析</p>
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
              href="/ChunYuanProject"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.stopPropagation();
                setHasInteracted(true);
              }}
            >
              土石方圖像辨識分析計算程式
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ChunYuanSide;
