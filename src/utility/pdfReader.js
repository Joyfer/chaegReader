export function getPageText(pageNum, PDFDocumentInstance) {
  // Return a Promise that is solved once the text of the page is retrieven
  return new Promise(function (resolve, reject) {
    PDFDocumentInstance.getPage(pageNum)
      .then(function (pdfPage) {
        // The main trick to obtain the text of the PDF page, use the getTextContent method
        pdfPage.getTextContent().then(function (textContent) {
          let textItems = textContent.items;
          let finalString = "";

          // Concatenate the string of the item to the final string
          for (let i = 0; i < textItems.length; i++) {
            let item = textItems[i];

            finalString += item.str + " ";
          }

          // Solve promise with the text retrieven from the page
          resolve(finalString);
        });
      })
      .catch((error) => console.log(error));
  });
}

export const ReadPDF = (nameToSearch) => {
  // Path to PDF file
  const url = `/books/${nameToSearch}.pdf`;

  // Asynchronous download of PDF
  const loadingTask = pdfjsLib.getDocument(url);
  return loadingTask;
};
