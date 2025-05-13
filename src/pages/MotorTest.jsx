import styles from "../css/projectdetail.module.css";
import { Link } from "react-router-dom";

function MotorTest() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>馬達控制器品質自動化測試</h1>
        <img className={styles.image} src="surpreme.png" alt="Motor Test" />

        <p className={styles.description}>
          本專案旨在開發一套自動化品質檢測系統，用以驗證馬達控制器(MCU)出廠前是否符合品質標準。
        </p>
        <p className={styles.description}>
          系統依照 <strong>品保單位（QA）設計的檢測流程</strong>，整合{" "}
          <strong>動力計平台（Dynamometer）</strong>與{" "}
          <strong>馬達控制器</strong>，並透過自訂的{" "}
          <strong>CAN BUS 通訊協議</strong>
          完成控制指令下發與數據回傳。
        </p>

        <p className={styles.description}>
          為了方便使用者簡易操作，軟體介面設計為 <strong>一鍵式測試按鈕</strong>
          ，
          可自動化執行整體測試流程，包含初始化、運轉控制、資料擷取與結果判定。
        </p>

        <h2 className={styles.subtitle}>📋 測試項目涵蓋</h2>
        <ol className={styles.orderedList}>
          {" "}
          <li>
            馬達 <strong>轉速</strong>
          </li>
          <li>
            輸出 <strong>扭力</strong>
          </li>
          <li>
            運轉期間 <strong>溫度</strong>
          </li>
          <li>
            系統運作時之 <strong>電壓</strong> 與 <strong>電流</strong>
          </li>
        </ol>

        <p className={styles.description}>
          本系統可有效降低操作複雜度與人為誤差，並提升產線測試效率與品質控管精度。
        </p>

        <h2 className={styles.subtitle}>💻 使用語言與開發環境</h2>
        <ul className={styles.features}>
          <li>使用語言：C++</li>
          <li>框架：QT</li>
          <li>通訊協議：CAN BUS</li>
        </ul>

        <a
          href="https://mega.nz/folder/tLNSFaaD#bLZTZL1T-Z3rsyj2APIc_Q/folder/BbkGmDhY"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.buttonMega}
        >
          查看MotorTest資訊
        </a>
        <Link to="/" className={styles.backLink}>
          ← 回首頁
        </Link>
      </div>
    </div>
  );
}

export default MotorTest;
