import React, { useContext } from "react";
import IconButtonMenu from "../../utilities/IconButtonMenu";
import PageReaderContext from "../../../context/PageReaderContext";

import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import { makeStyles } from "@mui/styles";

import FontDownloadRoundedIcon from "@mui/icons-material/FontDownloadRounded";
import FormatSizeRoundedIcon from "@mui/icons-material/FormatSizeRounded";

const useStyles = makeStyles((theme) => ({
  root: {},
  listText: {
    textTransform: "capitalize",
    padding: "0 1rem",
  },
}));

const ChangeFontSizeMenu = () => {
  const classes = useStyles();
  const { changeFontSize } = useContext(PageReaderContext);
  return (
    <IconButtonMenu icon={<FormatSizeRoundedIcon />}>
      <MenuList>
        {["large", "medium", "small"].map((el) => {
          return (
            <MenuItem key={el} onClick={() => changeFontSize(el)}>
              <ListItemIcon style={{ justifyContent: "center" }}>
                <FontDownloadRoundedIcon fontSize={el} color="primary" />
              </ListItemIcon>
              <ListItemText className={classes.listText}>{el}</ListItemText>
            </MenuItem>
          );
        })}
      </MenuList>
    </IconButtonMenu>
  );
};

export default ChangeFontSizeMenu;
