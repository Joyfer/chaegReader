import React from "react";
import IconButtonMenu from "../utilities/IconButtonMenu";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Slide from "@mui/material/Slide";
import useScrollTrigger from '@mui/material/useScrollTrigger';

import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";

import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import FontDownloadRoundedIcon from "@mui/icons-material/FontDownloadRounded";

const useStyles = makeStyles((theme) => ({
  root: {},
  listText: {
    textTransform: "capitalize",
    padding: "0 1rem",
  },
}));

const BottomBar = ({ changePage, changeFontSize, window }) => {
  const classes = useStyles();

  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

 

  return (
    <Slide appear={true} direction="up" in={!trigger}>
      <AppBar position="fixed" color="primary" sx={{ top: "auto", bottom: 0 }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <div>
            <IconButton color="inherit" onClick={() => changePage("preview")}>
              <KeyboardArrowLeftRoundedIcon />
            </IconButton>
            <IconButton color="inherit" onClick={() => changePage("next")}>
              <KeyboardArrowRightRoundedIcon />
            </IconButton>
          </div>
          <div>
            <IconButtonMenu>
              {["large", "medium", "small"].map((el) => {
                return (
                  <MenuItem key={el} onClick={() => changeFontSize(el)}>
                    <ListItemIcon style={{ justifyContent: "center" }}>
                      <FontDownloadRoundedIcon fontSize={el} />
                    </ListItemIcon>
                    <ListItemText className={classes.listText}>
                      {el}
                    </ListItemText>
                  </MenuItem>
                );
              })}
            </IconButtonMenu>
          </div>
        </Toolbar>
      </AppBar>
    </Slide>
  );
};

export default BottomBar;
