import { auth, provider } from "../firebase/config";
import { AUTH, LOGOUT } from "../constants/actionTypes";

export const signInWithGoogle = () => async (dispatch) => {
  try {
    // In v8, signInWithPopup is a method on auth, not a standalone import
    const result = await auth.signInWithPopup(provider);
    const user = result.user;
    dispatch({ type: AUTH, payload: user });
  } catch (error) {
    console.error("Google sign-in error:", error);
  }
};

export const logout = () => async (dispatch) => {
  try {
    await auth.signOut();
    dispatch({ type: LOGOUT });
  } catch (error) {
    console.error("Sign-out error:", error);
  }
};
