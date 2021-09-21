import React from "react";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "80px 0",
    display: "flex",
    alignContent: "center",
    flexDirection: "column",
    height: "100vh",
  },
  image: {
    width: "90%",
    margin: "30px auto",
  },
  buttonPanel: {
    display: "flex",
    marginTop: 25,
  },
  link: {
    color: "white",
    textDecoration: "none",
    width: "100%",
    marginTop: 20
  },
}));

export default function Index() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h3" align="center">
        BookReader
      </Typography>
      <img src="/indexVector.svg" alt="" className={classes.image} />
      <Typography variant="body1" align="center">
        Tu lugar para leer PDFS de la mejor manera.
      </Typography>
      <Link to="/home" className={classes.link}>
        <Button
          variant="contained"
          size="large"
          fullWidth
          sx={{ boxShadow: 15 }}
        >
          IR
        </Button>
      </Link>
      <div className={classes.buttonPanel}>
        <Button variant="text" fullWidth>
          About
        </Button>
        <Button variant="text" fullWidth>
          Creator
        </Button>
      </div>
    </div>
  );
}
