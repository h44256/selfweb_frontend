import styles from "../css/projectdetail.module.css";
import { Link } from "react-router-dom";

function MotorTest() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>馬達控制器品質自動化測試</h1>
        <img className={styles.image} src="/placeholder.png" alt="Motor Test" />
        <p className={styles.description}>
          本專案設計一套完整的自動測試架構，提供高效率測試流程與錯誤記錄機制。
        </p>
        <ul className={styles.features}>
          <li>🧪 測試步驟自動化、腳本化</li>
          <li>📊 結果記錄與自動生成測試報告</li>
          <li>🔌 UART / CANBus 控制與通訊整合</li>
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
export default MotorTest;
