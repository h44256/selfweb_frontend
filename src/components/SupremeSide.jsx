import styles from "../css/card.module.css";
function SupremeSide() {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img className={styles.surpreme} src="/surpreme.png"></img>
      </div>
      <div className={styles.cardContent}>工作經歷 </div>
      <div className={styles.cardContent}>Side Project</div>
      <p className={styles.companyContent}>個人網站</p>
      <p className={styles.companyContent}>前端 : React.js 後端 : Node.js</p>
      <p className={styles.companyContent}>後端框架 : Express </p>
      <p className={styles.companyContent}>雲端: AWS</p>
      <p className={styles.companyContent}>資料庫 : MySQL</p>
      <p className={styles.companyContent}>Web Server: NginX</p>
    </div>
  );
}
export default SupremeSide;
