import React, { useContext } from "react";
import PageReaderContext from "../../context/PageReaderContext";

import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const BookTextPage = () => {
  const { text, fontSize } = useContext(PageReaderContext);
  return (
    <Typography variant="body1" style={{ fontSize: fontSize + "px" }}>
      {text}
    </Typography>
  );
};

export default BookTextPage;
