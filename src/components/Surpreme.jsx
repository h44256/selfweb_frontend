import styles from "../css/card.module.css";
function Surpreme() {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img className={styles.surpreme} src="/surpreme.png"></img>
      </div>
      <div className={styles.cardContent}>至上電子 軟體研發工程師</div>
      <p className={styles.companyContent}>使用語言 : C++, C#</p>
      <p className={styles.companyContent}>使用框架 : QT, .NET</p>
      <p className={styles.companyContent}>通訊協議 : CAN Bus</p>
      <hr className={styles.divider} />
    </div>
  );
}
export default Surpreme;
