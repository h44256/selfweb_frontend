// import "./App.css";
// import TodoWrapper from './components/TodoWrapper'

// function App() {

//   return (
//     <><TodoWrapper/></>
//   )
// }

// export default App

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TodoList from "./pages/TodoList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo-list" element={<TodoList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
