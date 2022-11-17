import {
  signInWithGooglePopup,
  createUserDocumentFromAuth
} from "../../../utils/firebase/firebase.utils.js";
import { SignUpForm } from "../../sign-up-form/sign-up-form.component.jsx";

import { SignInForm } from "../../sign-in-form/sign-in-form.component.jsx";

import "./authentication.styles.scss";

export const Authentication = () => {

  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};