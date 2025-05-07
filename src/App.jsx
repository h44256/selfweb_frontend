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
import BootLoader from "./pages/BootLoader";
import MotorTest from "./pages/MotorTest";
import MotorGui from "./pages/MotorGui";
import StockSpider from "./pages/StockSpider";
import PersonalSite from "./pages/PersonalSite";
import BootLoader2 from "./pages/BootLoader2";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo-list" element={<TodoList />} />
        <Route path="/BootLoader" element={<BootLoader />} />
        <Route path="/MotorTest" element={<MotorTest />} />
        <Route path="/MotorGui" element={<MotorGui />} />
        <Route path="/StockSpider" element={<StockSpider />} />
        <Route path="/PersonalSite" element={<PersonalSite />} />
        <Route path="/BootLoader2" element={<BootLoader2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
