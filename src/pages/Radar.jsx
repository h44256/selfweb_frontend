import styles from "../css/projectdetail.module.css";
import { Link } from "react-router-dom";

function Radar() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>簡易倒車雷達</h1>
        <img className={styles.image} src="/placeholder.png" alt="Radar" />
        <p className={styles.description}>
          使用 Arduino Uno 結合 HC-SR04
          超音波感測器與蜂鳴器模擬倒車時的距離測量與警示音效。
        </p>
        <ul className={styles.features}>
          <li>🔧 距離測量範圍 2cm - 200cm</li>
          <li>🔊 蜂鳴器根據距離改變頻率</li>
          <li>📘 可延伸為多感測器佈局</li>
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
export default Radar;
