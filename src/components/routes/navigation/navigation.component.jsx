import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { UserContext } from "../../../contexts/user.context.jsx";
import { CartContext } from "../../../contexts/cart.context.jsx";

import { ReactComponent as CrownLogo } from "../../../assets/crown.svg";
import { CartIcon } from "../../cart-icon/cart-icon.component";
import { CartDropdown } from "../../cart-dropdown/cart-dropdown.component";

import { signOutUser } from "../../../utils/firebase/firebase.utils.js";

import "./navigation.styles.scss";

export const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrownLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};
