import React, { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import styles from "../styles/DamlaDamlaAsk.module.scss";
import ArrowLeft from "@material-ui/icons/ArrowLeft";
import ArrowRight from "@material-ui/icons/ArrowRight";
import { Button } from "@material-ui/core";

//worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function DamlaDamlaAsk() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(3);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Damla Damla Aşk</h1>

      <span className={styles.pagesIndicator}>
        Sayfa {pageNumber} | {numPages}
      </span>
      <div className={styles.pdfContainer}>
        <Document
          file="DDA.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
          className={styles.document}
        >
          <Page pageNumber={pageNumber} className={styles.page} />
        </Document>
        <Button
          className={styles.arrowLeftBtn}
          onClick={() => setPageNumber((prev) => prev - 1)}
          disabled={pageNumber <= 1}
        >
          <ArrowLeft className={styles.arrow} />
        </Button>
        <Button
          className={styles.arrowRightBtn}
          onClick={() => setPageNumber((prev) => prev + 1)}
          disabled={pageNumber >= numPages}
        >
          <ArrowRight className={styles.arrow} />
        </Button>
      </div>
    </div>
  );
}

export default DamlaDamlaAsk;
