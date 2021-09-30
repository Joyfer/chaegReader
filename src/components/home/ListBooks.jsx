import React, { useRef, useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import CoverPage from "../books/CoverPage";

const useStyles = makeStyles((theme) => ({
  root: {},
  list: {
    display: "flex",
    width: "100%",
    overflow: "auto",
    position: "absolute",
    left: 0,
    flex: "1 0 auto",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
}));

const ListBooks = () => {
  const classes = useStyles();
  // Set the height of helping div spacing the absolute div from list
  // Using the list height by useRef
  const ListBookDiv = useRef(null);
  const [heightDivList, setHeightDivList] = useState(280);

  useEffect(() => {
    setHeightDivList(ListBookDiv.current.offsetHeight);
  }, []);

  return (
    <>
      <Typography variant="h5">Public books</Typography>
      <div className={classes.list} ref={ListBookDiv}>
        {[1, 2, 3, 4, 5, 6, 7].map((el) => (
          <CoverPage key={el}></CoverPage>
        ))}
      </div>
      {/* Div helper for spacing absolute list div */}
      <div style={{ height: heightDivList + "px" }}></div>
    </>
  );
};

export default ListBooks;