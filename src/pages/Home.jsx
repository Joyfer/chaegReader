import React from "react";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import ListBooks from "../components/books/ListBooks";
import Layout from "../layout/Layout";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "1rem 0",
  },
  list: {
    margin: "1rem 0",
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <Layout>
      <div className={classes.root}>
        {[1].map((el) => (
          <div key={el} className={classes.list}>
            <ListBooks></ListBooks>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Home;
