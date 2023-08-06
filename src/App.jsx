import "./App.css";
import { HomePage } from "./components/Pages/HomePage/Home.page";
import { ContactPage } from "./components/Pages/ContactPage/Contact.page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="\" element={<HomePage />} />
          <Route path="\products" element={<></>} />
          <Route path="\faq" element={<ContactPage />} />
          <Route path="\error" element={<></>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
