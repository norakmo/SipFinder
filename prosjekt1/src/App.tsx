import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/home/home";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Drink from "./components/Drink";

import Browse from "./pages/browse/Browse";
import "./App.css";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router>
          <>
            <div className="NavigationBar">
              <NavBar />
            </div>
            <div className="space"></div>
            <Routes>
              <Route path={"/"} element={<Home />} />
              <Route path={"/browse"} element={<Browse />} />
              <Route path={"/drink"} element={<Drink />} />
            </Routes>
          </>
        </Router>
      </QueryClientProvider>
    </>
  );
}

export default App;
