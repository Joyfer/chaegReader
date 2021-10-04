import React, { useContext } from "react";
import PageReaderContext from "../../context/PageReaderContext";

import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {},
  loading: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100vh",
  },
}));

const BookTextPage = () => {
  const { text, fontSize } = useContext(PageReaderContext);
  const classes = useStyles();

  return (
    <>
      {text != undefined ? (
        <Typography
          className="fadeIn first"
          variant="body1"
          sx={{ fontSize: fontSize + "px", lineHeight: "1.8" }}
        >
          {text === ""
            ? "Nothing to preview, maybe PDF page is an image."
            : text}
        </Typography>
      ) : (
        <div className={classes.loading + " fadeIn first"}>
          <CircularProgress></CircularProgress>
        </div>
      )}
    </>
  );
};

export default BookTextPage;
