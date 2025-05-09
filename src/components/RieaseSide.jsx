import styles from "../css/card.module.css";

function RieaseSide() {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img className={styles.Riease} src="/Riease.jpg" alt="Riease logo" />
      </div>
      <div className={styles.projectLinks}>
        {/* 🧰 工作經歷區塊 */}
        <p className={`${styles.sectionTitle} ${styles.sectionWork}`}>
          💼 工作經歷
        </p>

        <p className={styles.groupTitle}>🗃 後台系統開發</p>
        <ul>
          <li>
            <a
              href="/ActionLog"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              資料後台操作紀錄新增/查詢功能
            </a>
          </li>
          <li>
            <a
              href="/LoginAlert"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              資料後台會員登入警示信系統
            </a>
          </li>
        </ul>

        <p className={styles.groupTitle}>🌐 前台網站開發</p>
        <ul>
          <li>
            <a
              href="/MyDataRevamp"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              MyData 前台網站重製改版
            </a>
          </li>
        </ul>

        {/* 💡 Side Project 區塊 */}
        <p className={`${styles.sectionTitle} ${styles.sectionSide}`}>
          💡 Side Project
        </p>

        <p className={styles.groupTitle}>🚘 嵌入式專案</p>
        <ul>
          <li>
            <a
              href="/Radar"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
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
