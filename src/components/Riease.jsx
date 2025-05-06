import styles from "../css/card.module.css";
function Riease() {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img className={styles.Riease} src="/Riease.jpg"></img>
      </div>
      <div className={styles.cardContent}>睿鍶科技 軟體開發工程師</div>
      <p className={styles.companyContent}>使用語言 : Java, JavaScript</p>
      <p className={styles.companyContent}>使用框架 : Spring Boot</p>
      <p className={styles.companyContent}>資料庫 : PostgreSQL</p>
    </div>
  );
}
export default Riease;
