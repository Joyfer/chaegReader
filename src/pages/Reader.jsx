import React, { useEffect, useState } from "react";
import BottomBar from "../components/reader/BottomBar";
import { ReadPDF, getPageText } from "../utility/pdfReader";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const useStyles = makeStyles((theme) => ({
  root: {},
  fontBook: {
    fontSize: "24px",
  },
}));

const Reader = () => {
  const classes = useStyles();

  const [text, setText] = useState(undefined);
  const [pageNumber, setPageNumber] = useState(2);

  useEffect(() => {
    // Loaded via <script> tag, create shortcut to access PDF.js exports.
    const PDFJS = window["pdfjs-dist/build/pdf"];

    // Specify the path to the worker
    PDFJS.GlobalWorkerOptions.workerSrc = "/js/pdf.worker.js";
  }, []);

  useEffect(() => {
    ReadPDF("Las_meditaciones_de_Marco_Aurelio-Marco_Aurelio", 4).promise.then(
      function (pdf) {
        console.log("PDF loaded");
        getPageText(pageNumber, pdf).then(function (textPage) {
          // Show the text of the page in the console
          setText(textPage);
        });
      },
      function (reason) {
        // PDF loading error
        console.error(reason);
      }
    );
  }, [pageNumber]);

  return (
    <div>
      <Typography variant="body1" className={classes.fontBook}>
        {text}
      </Typography>
      <BottomBar></BottomBar>
    </div>
  );
};

export default Reader;
