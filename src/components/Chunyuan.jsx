import styles from "../css/card.module.css";

function Chunyuan() {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img
          className={styles.chunyuan}
          src="/chunyuan.jpg"
          alt="Chunyuan Logo"
        />
      </div>
      <div className={styles.sectionTitle + " " + styles.sectionWork}>
        春原營造 現場工程師
      </div>
      <p className={styles.companyContent}>💻 使用語言：Python</p>
      <p className={styles.companyContent}>🖼️ 應用領域：圖像處理、自動化計算</p>
      <p className={styles.companyContent}>🔍 開發工具：OpenCV</p>
    </div>
  );
}

export default Chunyuan;
