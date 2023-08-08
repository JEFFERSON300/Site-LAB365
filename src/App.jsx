import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ProductPage } from "./Pages/ProductPage/Product.page";
import { ContactPage } from "./Pages/ContactPage/Contact.page";
import { NotFoundPage } from "./Pages/NotFoundPage/NotFound.page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./Pages/HomePage/Home.page";
import { FaqPage } from "./Pages/FaqPage/Faq.page";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
