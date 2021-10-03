import React, { useContext } from "react";
import PageReaderContext from "../../context/PageReaderContext";
import GoToNumberPageMenu from "./bottomBarComponents/GoToNumberPageMenu";
import ChangeFontSizeMenu from "./bottomBarComponents/ChangeFontSizeMenu";

import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Slide from "@mui/material/Slide";
import useScrollTrigger from "@mui/material/useScrollTrigger";

import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const BottomBar = ({ window }) => {
  const classes = useStyles();
  const { changePage, totalNumberPages, currentNumberPage } = useContext(
    PageReaderContext
  );

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={true} direction="up" in={!trigger}>
      <AppBar position="fixed" color="primary" sx={{ top: "auto", bottom: 0 }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <IconButton color="inherit" onClick={() => changePage("preview")}>
              <KeyboardArrowLeftRoundedIcon />
            </IconButton>
            <IconButton color="inherit" onClick={() => changePage("next")}>
              <KeyboardArrowRightRoundedIcon />
            </IconButton>
            <Typography variant="body2">{`${currentNumberPage}/${totalNumberPages}`}</Typography>
            <GoToNumberPageMenu />
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
