import React, { useContext } from "react";
import ChangeFontSizeMenu from "./bottomBarComponents/ChangeFontSizeMenu";
import NavigationMenu from "./bottomBarComponents/NavigationMenu";

import { makeStyles } from "@mui/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Slide from "@mui/material/Slide";
import useScrollTrigger from "@mui/material/useScrollTrigger";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const BottomBar = ({ window }) => {
  const classes = useStyles();

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={true} direction="up" in={!trigger}>
      <AppBar position="fixed" color="primary" sx={{ top: "auto", bottom: 0 }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <div>
            <NavigationMenu />
          </div>
          <div>
            <ChangeFontSizeMenu />
          </div>
        </Toolbar>
      </AppBar>
    </Slide>
  );
};

export default BottomBar;
