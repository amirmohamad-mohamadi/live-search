import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";

function App() {
  return (
    <Router>
      <div className="flex flex-col justify-between  h-screen">
        <Navbar />
        <main className="container mx-auto pb-12">Content</main>
        <Footer />
      </div>
      <h1>Hello World</h1>
    </Router>
  );
}

export default App;
