import styles from "../css/projectdetail.module.css";
import { Link } from "react-router-dom";

function MotorGui() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>模擬馬達控制 GUI 軟體</h1>
        <img className={styles.image} src="/placeholder.png" alt="Motor GUI" />

        <p className={styles.description}>
          <strong>Motor Control Simulation GUI</strong>{" "}
          是一套用於模擬馬達控制與安全機制反應的圖形化軟體工具，
          主要目的是展示軟體端對馬達運行數據的監控、預警與保護機制。
        </p>

        <p className={styles.description}>
          此工具會模擬馬達運行時所產生的各項參數，包括電壓、電流、扭力與溫度等關鍵數據，
          並允許使用者自定義 <strong>警示點與保護點</strong>。
        </p>

        <h2 className={styles.subtitle}>⚠️ 模擬與反應邏輯</h2>
        <ol className={styles.orderedList}>
          <li>當系統監測到數值達到警示點時，GUI 會即時顯示警示通知。</li>
          <li>
            若超過保護門檻，程式會自動模擬切斷動力（將 AC/DC
            電流與電壓歸零），模擬緊急保護反應。
          </li>
        </ol>

        <h2 className={styles.subtitle}>📈 數據視覺化與匯出</h2>
        <ol className={styles.orderedList}>
          <li>即時繪製模擬圖表</li>
          <li>
            支援匯出為 <code>.csv</code> 檔案
          </li>
          <li>便於進一步進行圖像化分析與統計應用</li>
        </ol>

        <p className={styles.description}>
          本專案雖未實際接入馬達裝置，
          但透過資料模擬與完整流程設計，成功展示軟體在馬達控制與安全防護方面可實現的功能與彈性。
        </p>

        <h2 className={styles.subtitle}>💻 使用語言與開發環境</h2>
        <ul className={styles.features}>
          <li>使用語言：C#</li>
          <li>框架：.NET WinForms</li>
          <li>通訊協議：CAN BUS</li>
        </ul>

        <a
          href="https://github.com/h44256/MotorGUI_sideProject"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.buttonGithub}
        >
          🟣 查看 GitHub 原始碼🔗
        </a>
        <Link to="/" className={styles.backLink}>
          ← 回首頁
        </Link>
      </div>
    </div>
  );
}

export default MotorGui;
