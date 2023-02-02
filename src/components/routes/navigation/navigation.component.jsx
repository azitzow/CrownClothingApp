import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";

import { ReactComponent as CrownLogo } from "../../../assets/crown.svg";
import { UserContext } from "../../../contexts/user.context.jsx";

import { signOutUser } from "../../../utils/firebase/firebase.utils.js";

import "./navigation.styles.scss";

export const Navigation = () => {

  const { currentUser, setCurrentUser } = useContext(UserContext);

  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  };

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
          {
            currentUser ? (
              <span className="nav-link" onClick={signOutHandler}>SIGN OUT</span>
              ) : (
                <Link className="nav-link" to="/auth">
                  SIGN IN
                </Link>
              )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};
