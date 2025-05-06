import Card from "../components/Card";
function Home() {
  return (
    <div>
      <h1>這是首頁</h1>
      <a href="/todo-list">
        <button>前往 TODO List</button>
      </a>
      <Card />
    </div>
  );
}

export default Home;
