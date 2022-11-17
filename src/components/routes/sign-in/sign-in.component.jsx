import {
  signInWithGooglePopup,
  createUserDocumentFromAuth
} from "../../../utils/firebase/firebase.utils.js";
import { SignUpForm } from "../../sign-up-form/sign-up-form.component.jsx";

export const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div className="sign-in">
      <h1>Sign In Page</h1>
      <button onClick={ logGoogleUser }>Sign In With Google Popup</button>
      <SignUpForm />
    </div>
  );
};