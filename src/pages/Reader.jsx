import React, { useContext } from "react";
import PageReaderContext from "../context/PageReaderContext";
import BottomBar from "../components/reader/BottomBar";
import BookTextPage from "../components/reader/BookTextPage";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: { paddingBottom: "65px", paddingTop: "1rem" },
}));

const Reader = () => {
  const { text } = useContext(PageReaderContext);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <BookTextPage></BookTextPage>
      <BottomBar></BottomBar>
    </div>
  );
};

export default Reader;
