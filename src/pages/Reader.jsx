import React, { useContext } from "react";
import PageReaderContext from "../context/PageReaderContext";

import BottomBar from "../components/reader/BottomBar";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: "65px",
    paddingTop: "1rem",
  },
}));

const Reader = () => {
  const { text, fontSize } = useContext(PageReaderContext);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="body1" style={{ fontSize: fontSize + "px" }}>
        {text}
      </Typography>
      <BottomBar></BottomBar>
    </div>
  );
};

export default Reader;
