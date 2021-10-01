import React, { useState, useEffect } from "react";
import IconButtonMenu from "../utilities/IconButtonMenu";
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
import TextField from "@mui/material/TextField";

import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import FontDownloadRoundedIcon from "@mui/icons-material/FontDownloadRounded";
import FormatSizeRoundedIcon from "@mui/icons-material/FormatSizeRounded";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";

const useStyles = makeStyles((theme) => ({
  root: {},
  listText: {
    textTransform: "capitalize",
    padding: "0 1rem",
  },
}));

const BottomBar = ({
  changePage,
  changeFontSize,
  window,
  totalNumberPages,
  currentNumberPage,
  setCurrentNumberPage,
}) => {
  const classes = useStyles();

  const [numberPageToGo, setNumberPageToGo] = useState(currentNumberPage);

  const handleNumberPageToGo = (event) => {
    setNumberPageToGo(parseInt(event.target.value) || "");
  };

  const goToPageNumber = () => {
    setCurrentNumberPage(numberPageToGo);
  };

  const disableGoToPageButtonIf = () => {
    return numberPageToGo < 0 || numberPageToGo > totalNumberPages;
  };

  useEffect(() => {
    setNumberPageToGo(currentNumberPage);
  }, [currentNumberPage]);

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
            <IconButtonMenu icon={<MoreVertRoundedIcon />}>
              <div
                style={{
                  padding: "0 1rem",
                  display: "flex",
                  alignItems: "flex-end",
                }}
              >
                <TextField
                  id="GoToNumberPage"
                  label="Number"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="standard"
                  value={numberPageToGo}
                  onChange={handleNumberPageToGo}
                />
                <Button
                  sx={{ marginLeft: "10px" }}
                  color="primary"
                  variant="outlined"
                  onClick={goToPageNumber}
                  disabled={disableGoToPageButtonIf()}
                >
                  Go
                </Button>
              </div>
            </IconButtonMenu>
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
