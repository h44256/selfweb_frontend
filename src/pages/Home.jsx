import Card from "../components/Card";
import styles from "../css/home.module.css";
function Home() {
  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.title}>這是首頁</h1>
      <a href="/todo-list">
        <button>前往 TODO List</button>
      </a>
      <Card />
    </div>
  );
}

export default Home;
