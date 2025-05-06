import styles from "../css/card.module.css";
function chunyuan() {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img className={styles.chunyuan} src="/chunyuan.jpg"></img>
      </div>
      <div className={styles.cardContent}>春原營造 現場工程師(自學OpenCV)</div>
      <p className={styles.companyContent}>使用語言 : Python</p>
      <p className={styles.companyContent}>使用Lib : OpenCV</p>
    </div>
  );
}
export default chunyuan;
