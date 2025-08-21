import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signInWithGoogle, logout } from "../../actions/auth";
import firebase from "firebase/app";
import "firebase/auth";
import { AUTH } from "../../constants/actionTypes";
import { Modal, TextField, Button } from "@material-ui/core";
import * as styles from "./styles";
import {Link} from 'react-router-dom'

const Auth = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const [open, setOpen] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSignUp = async () => {
    try {
      const result = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      dispatch({ type: AUTH, payload: result.user });
      handleClose();
    } catch (error) {
      setError(error.message);
      console.error(error);
    }
  };

  const handleLogin = async () => {
    try {
      const result = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      dispatch({ type: AUTH, payload: result.user });
      handleClose();
    } catch (error) {
      setError(error.message);
      console.error(error);
    }
  };
  return (
    <div>
      {user ? (
        <div style={styles.container}>
          <Link to="/profile" style={styles.link}>
            <img
              src={user.photoURL}
              alt={user.displayName}
              style={styles.userImage}
            />
            <span style={styles.userName}>{user.displayName}</span>
          </Link>
          <button onClick={() => dispatch(logout())} style={styles.button}>
            Logout
          </button>
        </div>
      ) : (
        <>
          <button onClick={handleOpen} style={styles.logoutButton}>
            Sign In
          </button>
          <Modal open={open} onClose={handleClose}>
            <div style={styles.modal}>
              <h2>{isSignUp ? "Sign Up" : "Sign In"}</h2>

              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={() => {
                  dispatch(signInWithGoogle());
                  handleClose();
                }}
              >
                Continue with Google
              </Button>

              <hr style={{ margin: "20px 0" }} />

              {isSignUp && (
                <TextField
                  label="Name"
                  type="name"
                  fullWidth
                  margin="normal"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              )}

              <TextField
                label="Email"
                type="email"
                fullWidth
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                label="Password"
                type="password"
                fullWidth
                margin="normal"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <Button
                variant="contained"
                color="secondary"
                fullWidth
                style={{ marginTop: "15px" }}
                onClick={isSignUp ? handleSignUp : handleLogin}
              >
                {isSignUp ? "Sign Up with Email" : "Login with Email"}
              </Button>

              <p style={{ marginTop: "10px" }}>
                {isSignUp
                  ? "Already have an account?"
                  : "Don't have an account?"}{" "}
                <span
                  style={{ color: "blue", cursor: "pointer" }}
                  onClick={() => setIsSignUp(!isSignUp)}
                >
                  {isSignUp ? "Login" : "Sign Up"}
                </span>
              </p>
              {error && (
                <p style={{ color: "red", marginTop: "10px" }}>{error}</p>
              )}
            </div>
          </Modal>
        </>
      )}
    </div>
  );
};

export default Auth;
