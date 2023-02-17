import { Routes, Route } from "react-router-dom";
import { Home } from "./components/routes/home/home.component.jsx";
import { Navigation } from "./components/routes/navigation/navigation.component.jsx";
import { Shop } from "./components/routes/shop/shop.component.jsx";
import { Authentication } from "./components/routes/authentication/authentication.component.jsx";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="contact" element={<h1>Contact</h1>} />
        <Route path="shopping-cart" element={<h1>Shoping cart page!</h1>} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};
