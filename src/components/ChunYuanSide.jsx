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

        <div className={styles.sideNote}>
          利用 Python 與 OpenCV
          技術進行施工現場土石方照片分析，自動辨識範圍與面積，輔助工程單位進行土石方數量預估與紀錄。
        </div>
      </div>
    </div>
  );
}

export default ChunYuanSide;
