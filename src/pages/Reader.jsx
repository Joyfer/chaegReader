import React, { useEffect, useState } from "react";
import BottomBar from "../components/reader/BottomBar";
import { ReadPDF, getPageText } from "../utility/pdfReader";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: "65px",
    paddingTop: "1rem",
  },
}));

const Reader = () => {
  const classes = useStyles();

  const [text, setText] = useState(undefined);
  const [currentNumberPage, setCurrentNumberPage] = useState(2);
  const [fontSize, setFontSize] = useState(16);
  const [totalNumberPages, setTotalNumberPages] = useState(0);

  const changePage = (action) => {
    switch (action) {
      case "next":
        setCurrentNumberPage(currentNumberPage + 1);
        break;
      case "preview":
        if (currentNumberPage != 1) {
          setCurrentNumberPage(currentNumberPage - 1);
        }
        break;
    }
  };

  const changeFontSize = (fontSize) => {
    switch (fontSize) {
      case "large":
        setFontSize(24);
        break;
      case "medium":
        setFontSize(16);
        break;
      case "small":
        setFontSize(12);
        break;
    }
  };

  useEffect(() => {
    // Loaded via <script> tag, create shortcut to access PDF.js exports.
    const PDFJS = window["pdfjs-dist/build/pdf"];

    // Specify the path to the worker
    PDFJS.GlobalWorkerOptions.workerSrc = "/js/pdf.worker.js";
  }, []);

  useEffect(() => {
    ReadPDF("Las_meditaciones_de_Marco_Aurelio-Marco_Aurelio").promise.then(
      function (pdf) {
        setTotalNumberPages(pdf.numPages);
        getPageText(currentNumberPage, pdf).then(function (textPage) {
          // Set the text to variable
          setText(textPage);
        });
      },
      function (reason) {
        // PDF loading error
        console.error(reason);
      }
    );
  }, [currentNumberPage]);

  return (
    <div className={classes.root}>
      <Typography variant="body1" style={{ fontSize: fontSize + "px" }}>
        {text}
        
      </Typography>
      <BottomBar
        changePage={changePage}
        changeFontSize={changeFontSize}
        totalNumberPages={totalNumberPages}
        currentNumberPage={currentNumberPage}
        setCurrentNumberPage={setCurrentNumberPage}
      ></BottomBar>
    </div>
  );
};

export default Reader;
