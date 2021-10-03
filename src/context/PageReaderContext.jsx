import React, { createContext, useEffect, useState } from "react";
import { ReadPDF, getPageText } from "../utility/pdfReader";

const PageReaderContext = createContext();

const PageReaderProvider = ({ children }) => {
  const [text, setText] = useState(undefined);
  const [currentNumberPage, setCurrentNumberPage] = useState(undefined);
  const [fontSize, setFontSize] = useState(16);
  const [totalNumberPages, setTotalNumberPages] = useState(0);
  const [bookURL, setBookURL] = useState(undefined);

  // When page load for first time
  useEffect(() => {
    // Loaded via <script> tag, create shortcut to access PDF.js exports.
    const PDFJS = window["pdfjs-dist/build/pdf"];

    setBookURL("Las_meditaciones_de_Marco_Aurelio-Marco_Aurelio");

    // Specify the path to the worker
    PDFJS.GlobalWorkerOptions.workerSrc = "/js/pdf.worker.js";

    // Look if there is number page saved on Local Storage
    let savedNumberPage = localStorage.getItem("savedNumberPage");
    console.log(savedNumberPage);
    if (savedNumberPage != null) {
      setCurrentNumberPage(parseInt(savedNumberPage));
    } else {
      setCurrentNumberPage(parseInt(1));
    }
  }, []);

  // Change page when state: currentNumberPage changes
  useEffect(() => {
    setText(undefined);
    if (bookURL != undefined) {
      ReadPDF(bookURL).promise.then(
        function (pdf) {
          setTotalNumberPages(pdf.numPages);
          getPageText(currentNumberPage, pdf).then(function (textPage) {
            // Save URL and Current page to local storage
            localStorage.setItem("savedNumberPage", currentNumberPage);
            // Set th text to variable
            setText(textPage);
          });
        },
        function (reason) {
          // PDF loading error
          console.error(reason);
        }
      );
    }
  }, [currentNumberPage]);

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

  const data = {
    text,
    changePage,
    changeFontSize,
    totalNumberPages,
    currentNumberPage,
    setCurrentNumberPage,
    fontSize,
  };

  return (
    <PageReaderContext.Provider value={data}>
      {children}
    </PageReaderContext.Provider>
  );
};

export { PageReaderProvider };
export default PageReaderContext;
