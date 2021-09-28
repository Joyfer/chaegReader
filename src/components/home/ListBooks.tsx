import React from "react";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import CoverPage from "../books/CoverPage";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const ListBooks = () => {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h4" className="fadeIn second">
        Public books
      </Typography>
      <CoverPage></CoverPage>
    </>
  );
};

export default ListBooks;
