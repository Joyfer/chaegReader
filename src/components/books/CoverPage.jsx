import React from "react";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "130px",
    padding: "1rem 0",
    flex: "inherit",
    margin: "0 1rem",
  },
  image: {
    height: "200px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    borderRadius: "10px",
    marginBottom: "0.7rem",
  },
  bookName: {
    color: theme.palette.subText.main,
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
}));

const CoverPage = ({ bookData }) => {
  const classes = useStyles();
  const { id, title, autor, pdfName, image } = bookData;

  return (
    <div className={classes.root}>
      <Link to={`/reader/${pdfName}`} className={classes.link}>
        <Box
          className={classes.image}
          sx={{ boxShadow: 10, backgroundImage: `url(${image})` }}
        ></Box>
        <Typography variant="subtitle2" align="center">
          {title}
        </Typography>
        <Typography variant="body2" align="center" className={classes.bookName}>
          {autor}
        </Typography>
      </Link>
    </div>
  );
};

export default CoverPage;
