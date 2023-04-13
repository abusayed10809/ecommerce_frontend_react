import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Pay from "./components/Pay";
import Success from "./components/Success";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
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
