import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { GithubProvider } from "./context/Github/GithubContext";

function App() {
  return (
    <GithubProvider>
      <Router>
        <div className="flex flex-col justify-between  h-screen">
          <Navbar />
          <main className="container mx-auto pb-12">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/notfound" element={<NotFound />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </GithubProvider>
  );
}

export default App;
