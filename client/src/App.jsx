import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Register from "./components/Authentification/Register";
import LoginForm from "./components/Authentification/LoginForm";
import UpdatePassword from "./components/Authentification/UpdatePassword";
import ForgotPassword from "./components/Authentification/ForgotPassword"; 
import SingleProduct from "./components/SingleProduct";
import ProductDetail from "./components/ProductDetail";
import BlogComponent from "./components/Blog";
import BlogDetail from "./components/BlogDetail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="auth" element={<Auth />}>
            <Route path="login" element={<LoginForm />} />
            <Route path="register" element={<Register />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path="update-password" element={<UpdatePassword />} />
          </Route>
          <Route path="SingleProduct" element={<SingleProduct />} />
          <Route path="/product/:productId" element={<ProductDetail/>} />
          <Route path="blogs" element={<BlogComponent/>}/>
          <Route path="/blogs/:blogId" element={<BlogDetail/>} />
          </Route>
      </Routes>
    </>
  );
}

export default App;
