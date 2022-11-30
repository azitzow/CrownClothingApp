import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";

import { ReactComponent as CrownLogo } from "../../../assets/crown.svg";
import { UserContext } from "../../../contexts/user.context.jsx";

import "./navigation.styles.scss";

export const Navigation = () => {

  const { currentUser } = useContext(UserContext);
  // console.log("currentUser: ", currentUser);

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
          <Link className="nav-link" to="/contact">
            CONTACT
          </Link>
          <Link className="nav-link" to="/auth">
            SIGN IN
          </Link>
          <Link className="nav-link" to="/shopping-cart">
            CARTLOGO
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};
