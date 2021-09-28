const ReadPDF = (nameToSearch, numberPage) => {
  // Path to PDF file
  var url = `/books/${nameToSearch}.pdf`;
  // Loaded via <script> tag, create shortcut to access PDF.js exports.
  var PDFJS = window["pdfjs-dist/build/pdf"];

  // Specify the path to the worker
  PDFJS.GlobalWorkerOptions.workerSrc = "/js/pdf.worker.js";

  function getPageText(pageNum, PDFDocumentInstance) {
    // Return a Promise that is solved once the text of the page is retrieven
    return new Promise(function (resolve, reject) {
      PDFDocumentInstance.getPage(pageNum)
        .then(function (pdfPage) {
          // The main trick to obtain the text of the PDF page, use the getTextContent method
          pdfPage.getTextContent().then(function (textContent) {
            var textItems = textContent.items;
            var finalString = "";

            // Concatenate the string of the item to the final string
            for (var i = 0; i < textItems.length; i++) {
              var item = textItems[i];

              finalString += item.str + " ";
            }

            // Solve promise with the text retrieven from the page
            resolve(finalString);
          });
        })
        .catch((error) => console.log(error));
    });
  }

  // Asynchronous download of PDF
  var loadingTask = pdfjsLib.getDocument(url);
  loadingTask.promise.then(
    function (pdf) {
      console.log("PDF loaded");

      // Fetch the first page
      var totalPages = pdf.numPages;

      console.log(totalPages);
      let n;

      getPageText(numberPage, pdf).then(function (textPage) {
        // Show the text of the page in the console
        console.log(textPage);
      });
    },
    function (reason) {
      // PDF loading error
      console.error(reason);
    }
  );
};

export default ReadPDF;
