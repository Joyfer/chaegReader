import React from "react";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "120px",
    padding: "1rem 0",
    flex: "inherit",
    margin: "0 1rem"
  },
  image: {
    height: "170px",
    backgroundImage: "url(https://i.imgur.com/afLV0Ik.jpg)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom",
    borderRadius: "10px",
    marginBottom: "0.7rem",
  },
  bookName: {
    color: theme.palette.subText.main,
  },
}));

const CoverPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box className={classes.image} sx={{ boxShadow: 10 }}></Box>
      <Typography variant="subtitle2" align="center">
        Marco Aurelio
      </Typography>
      <Typography variant="body2" align="center" className={classes.bookName}>
        Meditaciones
      </Typography>
    </div>
  );
};

export default CoverPage;
