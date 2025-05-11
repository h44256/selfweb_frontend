import styles from "../css/card.module.css";

function Riease() {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img className={styles.Riease} src="/Riease.jpg" alt="Riease Logo" />
      </div>
      <div className={styles.sectionTitle + " " + styles.sectionWork}>
        睿鍶科技 軟體開發工程師
      </div>
      <p className={styles.companyContent}>💻 使用語言：Java, JavaScript</p>
      <p className={styles.companyContent}>🧱 使用框架：Spring Boot</p>
      <p className={styles.companyContent}>🗄️ 資料庫：PostgreSQL</p>

      <div className={styles.sectionTitle + " " + styles.sectionSide}>
        Side Project 自學技能
      </div>
      <p className={styles.companyContent}>🔧 Arduino：自製簡易倒車雷達</p>
    </div>
  );
}

export default Riease;
