import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignupPage from './pages/SignupPage';
import LoginPage from "./pages/LoginPage.js"
import CartPage from "./pages/CartPage.js";
import CheckoutPage from "./pages/CheckoutPage.js";
import ProductDetailsPage from "./pages/productDetailsPage.js";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/cart" element={<CartPage/>} />
        <Route path="/checkout"element={<CheckoutPage />}/>
        <Route path="/productdetails/:id" element={<ProductDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App
