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
import FontDownloadRoundedIcon from '@mui/icons-material/FontDownloadRounded';

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const BottomBar = ({ changePage }) => {
  const classes = useStyles();

  return (
    <AppBar position="fixed" color="primary" sx={{ top: "auto", bottom: 0 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit" onClick={() => changePage("preview")}>
            <KeyboardArrowLeftRoundedIcon />
          </IconButton>
          <IconButton color="inherit" onClick={() => changePage("next")}>
            <KeyboardArrowRightRoundedIcon />
          </IconButton>
          <IconButtonMenu>
            {["big", "normal", "small"].map((el) => {
              return (
                <MenuItem key={el}>
                  <ListItemIcon>
                    <FontDownloadRoundedIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>{el}</ListItemText>
                </MenuItem>
              );
            })}
          </IconButtonMenu>
        </Toolbar>
      </AppBar>
    </AppBar>
  );
};

export default BottomBar;
