import React from "react";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box"

const useStyles = makeStyles((theme) => ({
  root: {
      width: "170px",
      padding: "1rem 0"
  },
  image: {
      height: "200px",
      backgroundImage: "url(https://i.imgur.com/afLV0Ik.jpg)",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "bottom",
      borderRadius: "10px",
      marginBottom: "1rem"
  }
}));

const CoverPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box className={classes.image} sx={{ boxShadow: 10 }}></Box>
      <Typography variant="h6" align="center">Marco Aurelio</Typography>
      <Typography variant="body1" align="center">Meditaciones</Typography>
    </div>
  );
};

export default CoverPage;
