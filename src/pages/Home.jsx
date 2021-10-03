import React from "react";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import ListBooks from "../components/home/ListBooks";
import Layout from "../layout/Layout";
import { Link } from "react-router-dom";

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
            <Link
              to="/reader/Las_meditaciones_de_Marco_Aurelio-Marco_Aurelio"
              className={classes.link + " fadeIn fourth"}
            >
              <ListBooks></ListBooks>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Home;
