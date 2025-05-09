import styles from "../css/card.module.css";
function Surpreme() {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img
          className={styles.surpreme}
          src="/surpreme.png"
          alt="Supreme Logo"
        />
      </div>
      <div className={styles.sectionTitle + " " + styles.sectionWork}>
        至上電子 軟體研發工程師
      </div>
      <p className={styles.companyContent}>💻 使用語言：C++, C#</p>
      <p className={styles.companyContent}>🧱 使用框架：QT, .NET</p>
      <p className={styles.companyContent}>🔗 通訊協議：CAN Bus</p>

      <hr className={styles.divider} />

      <div className={styles.sectionTitle + " " + styles.sectionSide}>
        Side Project 自學技能
      </div>
      <p className={styles.companyContent}>🌐 前端：React.js</p>
      <p className={styles.companyContent}>🛠️ 後端：Node.js</p>
      <p className={styles.companyContent}>🧩 後端框架：Express</p>
      <p className={styles.companyContent}>☁️ 雲端：AWS</p>
      <p className={styles.companyContent}>🗄️ 資料庫：MySQL</p>
      <p className={styles.companyContent}>🧭 Web Server：NginX</p>
    </div>
  );
}
export default Surpreme;
