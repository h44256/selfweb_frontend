import styles from "../css/projectdetail.module.css";
import { Link } from "react-router-dom";

function ChunYuan() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>土石方圖像辨識分析計算程式</h1>
        <img
          className={styles.image}
          src="/placeholder.png"
          alt="ChunYuan Project"
        />

        <p className={styles.description}>
          本專案旨在解決土石方工程中「地形量測與體積計算」過程繁瑣且容易產生人為誤差的問題。
          傳統作法多依賴 <strong>AutoCAD 輸出的 2D 圖面</strong> 搭配{" "}
          <strong>Excel 手動運算</strong>，
          不僅計算流程耗時，亦因操作複雜與資料繁多，容易導致誤差累積。
        </p>

        <p className={styles.description}>
          為優化整體作業流程，我於下班時間自學 <strong>Python</strong>， 並結合{" "}
          <strong>OpenCV 圖像處理函式庫</strong>
          ，開發出一套可自動化辨識圖像輪廓、估算地形體積並產出報表的系統。
          系統運作流程包括：
        </p>

        <ol className={styles.orderedList}>
          <li>
            讀取由 AutoCAD 匯出的 <strong>2D 地形圖檔</strong>
          </li>
          <li>
            使用 <strong>OpenCV</strong> 進行圖像前處理與地形輪廓解析
          </li>
          <li>
            透過 <strong>數值積分方法</strong> 估算現況地形每段的面積
          </li>
          <li>計算每段面積與統一設計高程的高差，估算挖方／填方體積</li>
          <li>
            將結果乘以區段長度後整合，並自動輸出為 <strong>Excel 報表</strong>
          </li>
        </ol>

        <h2 className={styles.subtitle}>✅ 專案動機與收穫</h2>
        <p className={styles.description}>
          本專案完全由我獨立完成，涵蓋圖像處理、數值計算、資料整合與報表輸出等完整流程。
          其開發動機源自於希望{" "}
          <strong>自動化傳統土石方體積計算中的輸入、處理與產出流程</strong>，
          以減少人為誤差並大幅提升工作效率。
        </p>

        <p className={styles.description}>
          透過本專案，我強化了 <strong>Python 與 OpenCV 的實作能力</strong>，
          並將 <strong>工程數學與資訊技術結合應用於實際問題解決</strong>，
          展現出跨領域整合與實作落地的能力。
        </p>

        <h2 className={styles.subtitle}>🏆 專案成果</h2>
        <ul className={styles.features}>
          <li>
            <strong>大幅縮短作業時間：</strong> 傳統每 10 萬立方公尺需約 2 週 →
            本系統僅需約 2 小時
          </li>
          <li>
            <strong>顯著降低誤差率：</strong> 由原本 15%～20% 降至約 1%
          </li>
          <li>
            <strong>具體節省工程成本：</strong> 節省估算金額高達約新台幣 1 億元
          </li>
        </ul>

        <h2 className={styles.subtitle}>💻 使用語言與開發環境</h2>
        <ul className={styles.features}>
          <li>使用語言：Python</li>
          <li>圖像處理工具：OpenCV</li>
          <li>數值方法：區段積分法（數值積分）</li>
          <li>輸出格式：Excel 報表</li>
        </ul>

        <div className={styles.buttonGroup}>
          <a
            href="https://github.com/h44256/OpenCV_readGround_sideProject"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.buttonGithub}
          >
            🟣 查看 GitHub 原始碼🔗
          </a>
          <a
            href="https://mega.nz/folder/tLNSFaaD#bLZTZL1T-Z3rsyj2APIc_Q/folder/EX0zWAJK"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.buttonMega}
          >
            查看圖像辨識專案資訊
          </a>
        </div>
        <Link to="/" className={styles.backLink}>
          ← 回首頁
        </Link>
      </div>
    </div>
  );
}

export default ChunYuan;
