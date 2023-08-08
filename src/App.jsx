import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ProductPage } from "./components/Pages/ProductPage/Product.page";
import { ContactPage } from "./components/Pages/ContactPage/Contact.page";
import { NotFoundPage } from "./components/Pages/NotFoundPage/NotFound.page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./components/Pages/HomePage/Home.page";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/products" element={<ProductPage />} />

          <Route path="/contacts" element={<ContactPage />} />

          <Route path="/faq" element={<></>} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
