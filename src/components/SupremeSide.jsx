import styles from "../css/card.module.css";
function SupremeSide() {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img className={styles.surpreme} src="/surpreme.png"></img>
      </div>
      <div className={styles.cardContent}>工作經歷 </div>
      <a
        href="/BootLoader"
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        className={styles.companyContent}
      >
        BootLoader 專案
      </a>

      <a
        href="/MotorTest"
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        className={styles.companyContent}
      >
        馬達控制器品質自動化測試
      </a>

      <a
        href="/MotorGui"
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        className={styles.companyContent}
      >
        模擬馬達控制 GUI 軟體
      </a>

      <a
        href="/StockSpider"
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        className={styles.companyContent}
      >
        台股盤後資訊爬蟲
      </a>

      <a
        href="/BootLoader2"
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        className={styles.companyContent}
      >
        BootLoader 2.0
      </a>

      <a
        href="/PersonalSite"
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        className={styles.companyContent}
      >
        個人網站
      </a>
    </div>
  );
}
export default SupremeSide;
