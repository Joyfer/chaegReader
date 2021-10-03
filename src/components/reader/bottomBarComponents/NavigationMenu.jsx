import React, { useContext } from "react";
import PageReaderContext from "../../../context/PageReaderContext";

import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import GoToNumberPageMenu from "./GoToNumberPageMenu";

import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";

const NavigationMenu = () => {
  const { currentNumberPage, totalNumberPages, changePage } = useContext(PageReaderContext);
  return (
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
  );
};

export default NavigationMenu;
