import styles from "../css/card.module.css";
function chunyuan() {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img className={styles.chunyuan} src="/chunyuan.jpg"></img>
      </div>
      <div className={styles.cardContent}>春原營造 現場工程師</div>
      <p className={styles.companyContent}>使用語言 : Python</p>
      <p className={styles.companyContent}>應用領域：圖像處理、自動化計算</p>
      <p className={styles.companyContent}>開發工具：OpenCV</p>
    </div>
  );
}
export default chunyuan;
