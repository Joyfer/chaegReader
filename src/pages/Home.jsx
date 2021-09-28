import React from "react";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import ListBooks from "../components/home/ListBooks";
import Layout from "../layout/Layout";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "1rem 0",
  },
  list: {
    marginBottom: "1rem"
  }
}));

const Home = () => {
  const classes = useStyles();

  return (
    <Layout>
      <div className={classes.root}>
        {[1, 2].map((el) => (
          <div className={classes.list}>
            <ListBooks></ListBooks>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Home;
