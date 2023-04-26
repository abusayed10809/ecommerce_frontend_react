import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Pay from "./components/Pay";
import Success from "./components/Success";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:category" element={<ProductList />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route path="/register" element={<Register />} />
          <Route path="/pay" element={<Pay />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </Router>
    </>
  );
  // return <Home />;
  // return <ProductList />;
  // return <Product />;
  // return <Login />;
  // return <Register />;
  // return <Cart />;
}

export default App;
