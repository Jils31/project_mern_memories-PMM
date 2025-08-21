import React, { useState } from "react";
import { useSelector } from "react-redux";
import { TextField, Button, Avatar } from "@material-ui/core";
import firebase from "firebase/app";
import "firebase/auth";

const Profile = () => {
  const user = useSelector((state) => state.auth.user);
  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleUpdate = async () => {
    try {
      if (!user) return;

      await user.updateProfile({
        displayName: name,
        photoURL: photo,
      });

      setSuccess("Profile updated successfully!");
      setError("");
    } catch (err) {
      console.error(err);
      setError("Failed to update profile");
      setSuccess("");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "40px auto", textAlign: "center" }}>
      <h2>User Profile</h2>
      <Avatar
        src={photo}
        alt={name}
        style={{ width: "80px", height: "80px", margin: "auto" }}
      />
      <TextField
        label="Name"
        fullWidth
        margin="normal"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        label="Photo URL"
        fullWidth
        margin="normal"
        value={photo}
        onChange={(e) => setPhoto(e.target.value)}
      />
      <TextField
        label="Email"
        fullWidth
        margin="normal"
        value={user?.email}
        disabled
      />

      <Button
        variant="contained"
        color="primary"
        fullWidth
        style={{ marginTop: "15px" }}
        onClick={handleUpdate}
      >
        Save Changes
      </Button>

      {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
      {success && <p style={{ color: "green", marginTop: "10px" }}>{success}</p>}
    </div>
  );
};

export default Profile;