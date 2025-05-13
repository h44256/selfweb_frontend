import styles from "../css/card.module.css";

function SupremeSide() {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img
          className={styles.surpreme}
          src="/surpreme.png"
          alt="Supreme logo"
        />
      </div>

      <div className={styles.projectLinks}>
        <p className={styles.linkHint}>👇 點擊以下文字可前往專案介紹頁面</p>

        {/* 🎯 工作經歷區塊 */}
        <p className={`${styles.sectionTitle} ${styles.sectionWork}`}>
          💼 工作經歷
        </p>

        <p className={styles.groupTitle}>📦 韌體</p>
        <ul>
          <li>
            <a
              className={styles.linkBlock}
              href="/BootLoader"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              BootLoader 專案
            </a>
          </li>
          <li>
            <a
              className={styles.linkBlock}
              href="/CloudToFirmwareControl"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              CloudToFirmwareControl
            </a>
          </li>
        </ul>

        <p className={styles.groupTitle}>🧪 測試</p>
        <ul>
          <li>
            <a
              className={styles.linkBlock}
              href="/MotorTest"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              馬達控制器品質自動化測試
            </a>
          </li>
        </ul>

        {/* 🎯 Side Project 區塊 */}
        <p className={`${styles.sectionTitle} ${styles.sectionSide}`}>
          💡 Side Project
        </p>

        <p className={styles.groupTitle}>🔧 工具</p>
        <ul>
          <li>
            <a
              className={styles.linkBlock}
              href="/MotorGui"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              模擬馬達控制 GUI 軟體
            </a>
          </li>
        </ul>

        <p className={styles.groupTitle}>🌐 網路</p>
        <ul>
          <li>
            <a
              className={styles.linkBlock}
              href="/StockSpider"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              台股盤後資訊爬蟲
            </a>
          </li>
          <li>
            <a
              className={styles.linkBlock}
              href="/PersonalSite"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              個人網站
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SupremeSide;
