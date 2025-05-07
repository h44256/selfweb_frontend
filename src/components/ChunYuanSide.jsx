import styles from "../css/card.module.css";

function ChunYuanSide() {
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
        <ul>
          <li>
            <a
              href="/ChunYuanProject"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
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
