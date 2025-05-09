import styles from "../css/projectdetail.module.css";
import { Link } from "react-router-dom";

function CloudToFirmwareControl() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>CloudToFirmwareControl 專案介紹</h1>
        <img
          className={styles.image}
          src="/surpreme.png"
          alt="CloudToFirmwareControl 圖片"
        />

        <p className={styles.description}>
          <strong>CloudToFirmwareControl</strong>{" "}
          是一套橋接雲端與嵌入式韌體系統的控制模組，
          主要應用於電動機車三電系統（VCU、MCU、BMS）之間的韌體更新與系統控制流程中。
        </p>

        <p className={styles.description}>
          本模組透過自訂協議，負責接收來自雲端伺服器的指令與資料， 並以 CAN BUS
          為通訊介面下發至車載韌體，觸發對應功能執行。
        </p>

        <h2 className={styles.subtitle}>🔧 系統控制功能</h2>
        <ol className={styles.orderedList}>
          <li>支援多磁區操作（Bootloader 區、參數區、故障記錄區）</li>
          <li>提供登入驗證與時間校正機制</li>
          <li>具備資料讀取、擦除、備份與還原能力</li>
          <li>整合雲端控制指令並即時觸發韌體功能</li>
        </ol>

        <h2 className={styles.subtitle}>🌐 雲端串接能力</h2>
        <ol className={styles.orderedList}>
          <li>使用 Socket 與雲端伺服器進行即時資料交換</li>
          <li>支援資料同步與狀態回傳</li>
          <li>取代本地檔案讀取流程，提高效率與彈性</li>
        </ol>

        <p className={styles.description}>
          相較於傳統僅支援 Application 區燒錄的 BootLoader，
          CloudToFirmwareControl 提供更高階、更完整的磁區操作與韌體控制能力，
          奠定電動機車後台韌體架構的穩定與可擴充基礎。
        </p>

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

export default CloudToFirmwareControl;
