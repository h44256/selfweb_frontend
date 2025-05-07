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
    </div>
  );
}
export default SupremeSide;
