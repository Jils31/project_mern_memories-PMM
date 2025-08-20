import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@material-ui/core";
import Auth from "../Auth/Auth";
import memories from "../../images/memories.png";

const Navbar = () => {
  return (
    <AppBar
      position="static"
      color="inherit"
      style={{
        borderRadius: 15,
        margin: "30px 0",
        padding: "10px 20px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Toolbar style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
        <Box />

        <Box display="flex" alignItems="center">
          <img src={memories} alt="icon" height="60" style={{ marginRight: "10px" }} />
          <Typography variant="h2" align="center" style={{ color: "rgba(0,183,255,1)" }}>
            Memories
          </Typography>
        </Box>

        <Auth />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
