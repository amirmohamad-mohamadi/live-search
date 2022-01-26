import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./components/Layout/Navbar";

function App() {
  return (
    <Router>
      <div className="flex flex-col justify-between  h-screen">
        <Navbar />
        <main className="">Content</main>
      </div>
      <h1>Hello World</h1>
    </Router>
  );
}

export default App;
