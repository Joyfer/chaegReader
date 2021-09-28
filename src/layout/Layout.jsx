import React from "react";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "1rem 0",
  },
  header: {
    marginTop: "1rem"
  },
}));

const Layout = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h4" className={classes.header + " fadeIn first"}>
        책Reader
      </Typography>
      <>{props.children}</>
    </div>
  );
};

export default Layout;
