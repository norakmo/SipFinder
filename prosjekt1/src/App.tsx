import { useState } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/home/home";
import Browse from "./pages/browse/Browse";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <div>
          <NavBar />
          
          <div className="space"></div>
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/browse"} element={<Browse />} />

            {/* <Route path={"/LoginPage"} element={<LoginPage />} /> */}
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
