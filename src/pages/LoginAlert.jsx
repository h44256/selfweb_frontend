import styles from "../css/projectdetail.module.css";
import { Link } from "react-router-dom";

function LoginAlert() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>會員登入警示信系統</h1>
        <img
          className={styles.image}
          src="/placeholder.png"
          alt="Login Alert"
        />
        <p className={styles.description}>
          建立會員登入異常即時通知機制，發送 Email
          警示信，提升帳號安全防護能力。
        </p>
        <ul className={styles.features}>
          <li>📨 發信條件包含深夜登入/異常 IP</li>
          <li>📬 使用 NodeMailer 發信</li>
          <li>🕒 支援每日發送次數限制</li>
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
export default LoginAlert;
