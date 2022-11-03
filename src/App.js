import { Routes, Route } from "react-router-dom";
import { Home } from "./components/routes/home/home.component.jsx";
import { Navigation } from "./components/routes/navigation/navigation.component.jsx";
import { SignIn } from "./components/routes/sign-in/sign-in.component.jsx";

export const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Navigation />} >
          <Route index element={<Home />} />
          <Route path="shop" element={<h1>Shop</h1>} />
          <Route path="sign-in" element={<SignIn />} />
        </Route>
      </Routes>
    );
};
