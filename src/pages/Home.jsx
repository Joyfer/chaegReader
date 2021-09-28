import React from "react";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import ListBooks from "../components/home/ListBooks";
import Layout from "../layout/Layout";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "1rem 0",
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <Layout>
      <div className={classes.root}>
        <ListBooks></ListBooks>
      </div>
    </Layout>
  );
};

export default Home;
