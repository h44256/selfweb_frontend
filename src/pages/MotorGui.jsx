import styles from "../css/projectdetail.module.css";
import { Link } from "react-router-dom";

function MotorGui() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>模擬馬達控制 GUI 軟體</h1>
        <img className={styles.image} src="/placeholder.png" alt="Motor GUI" />
        <p className={styles.description}>
          本軟體提供馬達模擬介面，協助研發人員模擬轉速、溫度等參數調校，並可遠端控制設備。
        </p>
        <ul className={styles.features}>
          <li>🖥 使用 PyQt 實作 GUI 介面</li>
          <li>🎛 支援滑桿與數值輸入模擬</li>
          <li>🌐 支援 TCP/IP 傳輸控制指令</li>
        </ul>
        <a
          href="https://github.com/placeholder"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button}
        >
          查看 GitHub 原始碼
        </a>
        <Link to="/" className={styles.backLink}>
          ← 回首頁
        </Link>
      </div>
    </div>
  );
}
export default MotorGui;
