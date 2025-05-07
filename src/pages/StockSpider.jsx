import styles from "../css/projectdetail.module.css";
import { Link } from "react-router-dom";

function StockSpider() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>台股盤後資訊爬蟲</h1>
        <img
          className={styles.image}
          src="/placeholder.png"
          alt="Stock Spider"
        />
        <p className={styles.description}>
          每日自動爬取台灣證券交易所盤後數據，包含成交量、漲跌幅、法人買賣超等資訊。
        </p>
        <ul className={styles.features}>
          <li>🕸 使用 Python + requests + BeautifulSoup</li>
          <li>🗃 儲存資料至 CSV / SQLite</li>
          <li>🕒 支援排程自動執行</li>
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
export default StockSpider;
