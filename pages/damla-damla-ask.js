import React, { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import styles from "../styles/DamlaDamlaAsk.module.scss";
import ArrowLeft from "@material-ui/icons/ArrowLeft";
import ArrowRight from "@material-ui/icons/ArrowRight";
import { Button } from "@material-ui/core";
import { useRouter } from "next/router";

//worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function DamlaDamlaAsk() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(5);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const router = useRouter();

  const updateQuery = (page) => {
    router.push({
      pathname: "/damla-damla-ask",
      query: { page: page },
    });
  };

  useEffect(() => {
    const page = router?.query?.page;
    if (page) {
      setPageNumber(+page);
    }
  }, [router]);

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
          onClick={() => updateQuery(pageNumber - 1)}
          disabled={pageNumber <= 1}
        >
          <ArrowLeft className={styles.arrow} />
        </Button>
        <Button
          className={styles.arrowRightBtn}
          onClick={() => updateQuery(pageNumber + 1)}
          disabled={pageNumber >= numPages}
        >
          <ArrowRight className={styles.arrow} />
        </Button>
      </div>
    </div>
  );
}

export default DamlaDamlaAsk;
