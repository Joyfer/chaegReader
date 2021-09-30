import React from "react";
import IconButtonMenu from "../utilities/IconButtonMenu";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";

import ContentCut from "@mui/icons-material/ContentCut";
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

const BottomBar = ({ changePage, changeFontSize }) => {
  const classes = useStyles();

  return (
    <AppBar position="fixed" color="primary" sx={{ top: "auto", bottom: 0 }}>
      <AppBar position="static">
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
    </AppBar>
  );
};

export default BottomBar;
