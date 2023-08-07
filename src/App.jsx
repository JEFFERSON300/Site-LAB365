import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProductPage } from "./components/Pages/ProductPage/Product.page";
import { ContactPage } from "./components/Pages/ContactPage/Contact.page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<></>} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/faq" element={<ContactPage />} />
          <Route path="/error" element={<></>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
