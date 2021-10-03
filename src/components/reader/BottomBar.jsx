import React, { useContext } from "react";
import PageReaderContext from "../../context/PageReaderContext";
import IconButtonMenu from "../utilities/IconButtonMenu";
import GoToNumberPageMenu from "./bottomBarComponents/GoToNumberPageMenu";

import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Slide from "@mui/material/Slide";
import useScrollTrigger from "@mui/material/useScrollTrigger";

import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";

import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import FontDownloadRoundedIcon from "@mui/icons-material/FontDownloadRounded";
import FormatSizeRoundedIcon from "@mui/icons-material/FormatSizeRounded";

const useStyles = makeStyles((theme) => ({
  root: {},
  listText: {
    textTransform: "capitalize",
    padding: "0 1rem",
  },
}));

const BottomBar = ({ window }) => {
  const classes = useStyles();
  const {
    changePage,
    changeFontSize,
    totalNumberPages,
    currentNumberPage,
  } = useContext(PageReaderContext);


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
            <IconButtonMenu icon={<FormatSizeRoundedIcon />}>
              <MenuList>
                {["large", "medium", "small"].map((el) => {
                  return (
                    <MenuItem key={el} onClick={() => changeFontSize(el)}>
                      <ListItemIcon style={{ justifyContent: "center" }}>
                        <FontDownloadRoundedIcon
                          fontSize={el}
                          color="primary"
                        />
                      </ListItemIcon>
                      <ListItemText className={classes.listText}>
                        {el}
                      </ListItemText>
                    </MenuItem>
                  );
                })}
              </MenuList>
            </IconButtonMenu>
          </div>
        </Toolbar>
      </AppBar>
    </Slide>
  );
};

export default BottomBar;
