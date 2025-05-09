import styles from "../css/projectdetail.module.css";
import { Link } from "react-router-dom";

function Radar() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>簡易倒車雷達系統</h1>
        <img
          className={styles.image}
          src="/placeholder.png"
          alt="Radar Project"
        />

        <p className={styles.description}>
          本專案為一個{" "}
          <strong>使用 Arduino Uno 與超音波感測器實作的簡易倒車雷達系統</strong>
          ， 透過實作過程探索距離偵測與訊號控制的基本原理，
          並進一步了解嵌入式韌體開發的流程與挑戰。
        </p>

        <p className={styles.description}>
          雷達系統的核心機制為使用 <strong>超音波感測器（HC-SR04）</strong>
          偵測物體與裝置間的距離，並依據距離遠近變化控制 <strong>蜂鳴器</strong>
          發出不同頻率的聲響，模擬倒車時的警示提示音。
          當障礙物越接近時，提示音頻率越快，提供使用者即時的距離感知。
        </p>

        <h2 className={styles.subtitle}>✅ 專案動機與收穫</h2>
        <p className={styles.description}>
          過去主要以軟體為主的學習歷程中，
          我對「實體設備如何透過程式邏輯與環境互動」充滿好奇，
          因此透過本專案主動切入嵌入式領域， 試著從感測、運算到輸出控制，掌握
          MCU 的基本操作與概念。
        </p>

        <p className={styles.description}>
          本專案雖然功能簡單，卻涵蓋了韌體開發中的多個重要環節，例如：
        </p>

        <ol className={styles.orderedList}>
          <li>感測器數據的讀取與處理</li>
          <li>響應邏輯的編寫與除錯</li>
          <li>時間控制與訊號輸出精度調整</li>
        </ol>

        <p className={styles.description}>
          透過這次實作，我建立了基礎的 MCU 開發能力，
          並為未來進一步投入嵌入式系統應用奠定技術根基。
        </p>

        <h2 className={styles.subtitle}>💻 使用語言與開發環境</h2>
        <ul className={styles.features}>
          <li>開發平台：Arduino Uno</li>
          <li>感測器：HC-SR04 超音波模組</li>
          <li>輸出裝置：蜂鳴器</li>
          <li>使用語言：C / Arduino</li>
        </ul>

        <a
          href="https://mega.nz/folder/tLNSFaaD#bLZTZL1T-Z3rsyj2APIc_Q/folder/pDFTwTYK"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.buttonMega}
        >
          查看MCU倒車雷達資訊
        </a>

        <Link to="/" className={styles.backLink}>
          ← 回首頁
        </Link>
      </div>
    </div>
  );
}

export default Radar;
