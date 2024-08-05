import "./App.css";
import Home from "./components/Home";
import UserLogin from "./components/UserLogin";
import AnotherPage from "./components/AnotherPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddGames from "./components/Admn/AddGames";

function App() {
  return (
    <div>
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<UserLogin />} />
            <Route path="/home" element={<Home />} />
            <Route path="/next" element={<AnotherPage />} />
            <Route path="/addgames" element={<AddGames />} />
          </Routes>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
