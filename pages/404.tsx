import React from "react";
import { Container } from "theme-ui";
import Footer from "../components/Footer/Footer";
import PageNotFound from "../components/PageNotFound";
import { footerNotFoundPage } from "../components/PageNotFound/styles";

export default function NotFoundPage() {
  return (
    <>
      <PageNotFound />
      <Container sx={footerNotFoundPage}>
        <Footer animationNotVisible={true} />
      </Container>
    </>
  );
}
