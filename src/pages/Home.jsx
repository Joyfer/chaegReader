import React from "react";
import { makeStyles } from "@mui/styles";
import ListBooks from "../components/home/ListBooks";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2rem",
  },
}));

const Home = () => {
  return (
    <div>
      <ListBooks></ListBooks>
    </div>
  );
};

export default Home;
