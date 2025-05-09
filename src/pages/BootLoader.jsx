import styles from "../css/projectdetail.module.css";
import { Link } from "react-router-dom";

function BootLoader() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>BootLoader 專案介紹</h1>
        <img
          className={styles.image}
          src="/surpreme.png"
          alt="BootLoader 專案圖片"
        />

        <p className={styles.description}>
          本專案目標為實作一套基於{" "}
          <strong>
            CAN BUS 的 In-Application Programming (IAP) 韌體更新機制
          </strong>
          ， 用以對電動機車三電系統（VCU、MCU、BMS）進行韌體燒錄與更新。
        </p>

        <p className={styles.description}>
          系統架構中，韌體記憶體被分為多個區域並預先定義大小與位置，包含常駐的{" "}
          <strong>Bootloader 區</strong> 及可更新的{" "}
          <strong>Application 區</strong>，也是本次專案主要進行的工作部分。
        </p>

        <h2 className={styles.subtitle}>🔁 韌體更新流程</h2>
        <ol className={styles.orderedList}>
          <li>
            使用者從外部取得編譯後的韌體 <code>.bin</code> 檔。
          </li>
          <li>
            上位機透過 <code>FileStream</code> 將 <code>.bin</code>{" "}
            檔解析、分割與包裝準備傳輸。
          </li>
          <li>
            資料透過自訂 <strong>CAN-based Bootloader Protocol</strong>{" "}
            傳送，並搭配 <strong>CRC 檢查碼</strong> 驗證，同時實作{" "}
            <strong>handshaking</strong> 機制確保傳輸穩定。
          </li>
          <li>目標設備接收資料並寫入 Application 區。</li>
          <li>更新完成後設備重啟，執行新韌體。</li>
        </ol>

        <p className={styles.description}>
          此機制可在不中斷裝置功能、無須拆殼的情況下完成更新，提升維護效率與穩定性。
        </p>

        <h2 className={styles.subtitle}>✅ 專案成效與優勢</h2>
        <ol className={styles.orderedList}>
          <li>
            <strong>無需拆殼作業：</strong>
            <br />
            傳統需拆機燒錄，現在可直接透過 CAN 線上完成更新，
            <strong>大幅簡化維修流程</strong>。
          </li>
          <li>
            <strong>更新速度提升百倍：</strong>
            <br />
            人工傳輸需時約 15 分鐘，改用自動化後，
            <strong>僅需 5～10 秒即可完成</strong>。
          </li>
        </ol>

        <p className={styles.description}>
          本機制有效提升系統維護效率、穩定性與工程端便利性，是電動車三電韌體更新流程的重要升級。
        </p>

        <a
          href="https://github.com/yourname/bootloader"
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

export default BootLoader;
