import Card from "../components/Card";
import styles from "../css/home.module.css";

function Home() {
  return (
    <div className={styles.mainContainer}>
      <section className={styles.profileSection}>
        <img className={styles.avatar} src="/Self.jpg" alt="你的大頭貼" />
        <h1 className={styles.name}>游聲迪</h1>
        <p className={styles.intro}>
          軟體研發工程師｜從土木背景轉職軟體開發，持續拓展跨領域技能。
          <br />
          <span className={styles.introSub}>
            具備電動機車系統與 Web
            前後端實務經驗，熱衷自學與實作，從網站架設到簡易韌體專案皆親手完成。
          </span>
        </p>
        <div className={styles.socialLinks}>
          <a
            href="https://github.com/h44256"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/github.svg" alt="GitHub" />
          </a>
          <a
            href="https://www.linkedin.com/in/sheng-di-you-4b5b99334"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/linkedin.svg" alt="LinkedIn" />
          </a>
          <a
            href="mailto:h44256@gmail.com"
            className={styles.contactItem}
            title="點擊發信給我"
          >
            <img src="/gmail.svg" alt="Gmail" />
            <span className={styles.emailText}>h44256@gmail.com</span>
          </a>
        </div>
      </section>

      <h2 className={styles.sectionTitle}>🔧 技術專案</h2>
      <Card />

      <div className={styles.todoButtonWrapper}>
        <a href="/todo-list">
          <button className={styles.todoButton}>前往 TODO List</button>
        </a>
      </div>
    </div>
  );
}

export default Home;
