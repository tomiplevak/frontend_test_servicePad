import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import NewArticle from "./pages/NewArticle";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newArticle" element={<NewArticle />} />
        {/*Possible routes were created although they now only redirect to Home */}
        <Route path="/about" element={<Home />} />
        <Route path="/contact" element={<Home />} />
        <Route path="/blog" element={<Home />} />
        <Route path="/careers" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
