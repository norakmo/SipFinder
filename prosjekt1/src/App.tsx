import { useState } from 'react'
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/home/home";
import Search from "./pages/search/search";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
      <div>
        <div className="NavigationBar">
          <NavBar />
        </div>
        <div className="space"></div>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/search"} element={<Search />} />

          {/* <Route path={"/LoginPage"} element={<LoginPage />} /> */}
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
