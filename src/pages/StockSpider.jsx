import styles from "../css/projectdetail.module.css";
import { Link } from "react-router-dom";

function StockSpider() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>台股盤後資訊爬蟲</h1>
        <img className={styles.image} src="/KLine.jpg" alt="Stock Spider" />

        <p className={styles.description}>
          此專案旨在從 <strong>台灣證券交易所（TWSE）</strong>{" "}
          爬取台股的盤後資訊， 包含特定股票代號在指定日期區間內的{" "}
          <strong>收盤價格與成交日期</strong>，
          作為後續進行機器學習訓練的資料來源。
        </p>

        <p className={styles.description}>
          程式透過簡單的參數輸入（如日期區間與股票代號），
          即可自動發送請求並解析官方網站回傳的資料，快速取得所需的結構化資料。
        </p>
        <p className={styles.description}>
          此專案原為個人機器學習研究的數據蒐集前置工具，
          後續因學習重心轉向資料結構與程式設計（參考台大林軒田與孔令傑老師的課程），
          因此暫停模型訓練部分。目前預計未來可能朝以下幾個方向延伸發展：
        </p>

        <ol className={styles.orderedList}>
          <li>
            持續修習 <strong>作業系統與基礎資工課程</strong>
          </li>
          <li>
            強化 <strong>網頁前後端開發能力</strong>
          </li>
          <li>或重新啟動機器學習應用開發</li>
        </ol>

        <h2 className={styles.subtitle}>💻 使用語言與開發環境</h2>
        <ul className={styles.features}>
          <li>使用語言：python</li>
        </ul>

        <a
          href="https://github.com/h44256/CrawlerStock"
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

export default StockSpider;
