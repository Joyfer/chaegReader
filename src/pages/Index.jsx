import React from "react";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2.5rem 2rem",
    display: "flex",
    alignContent: "center",
    flexDirection: "column",
    justifyContent: "center",
    height: "100vh",
  },
  image: {
    width: "90%",
    margin: "30px auto",
    height: "200px"
  },
  buttonPanel: {
    display: "flex",
    marginTop: 25,
  },
  link: {
    color: "white",
    textDecoration: "none",
    width: "100%",
    marginTop: 20,
  },
}));

export default function Index() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <Typography variant="h3" align="center" className="fadeInRight">
        책Reader
      </Typography>
      <img
        src="/indexVector.svg"
        alt=""
        className={classes.image + " fadeIn second"}
      />
      <Typography variant="body1" align="center" className="fadeIn third">
        The best site to read your pdfs books, I hope you enjoy. 💜
      </Typography>
      <Link to="/home" className={classes.link + " fadeIn fourth"}>
        <Button
          variant="contained"
          size="large"
          fullWidth
          sx={{ boxShadow: 15 }}
        >
         START!
        </Button>
      </Link>
      <div className={classes.buttonPanel + " fadeIn fourth"}>
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
