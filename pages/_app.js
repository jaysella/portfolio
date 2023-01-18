import Footer from "../components/footer";
import { globalStyles, styled } from "../stitches.config";

function MyApp({ Component, pageProps }) {
  globalStyles();

  return (
    <PageOuter>
      <PageInner>
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
      </PageInner>
    </PageOuter>
  );
}

export default MyApp;

const PageOuter = styled("div", {
  "--page-border-width": "10px",
  width: "100%",
  height: "100vh",
  overflow: "hidden",
  backgroundColor: "#011019",
  border: "var(--page-border-width) solid $carrot",
});

const PageInner = styled("div", {
  width: "100%",
  height: "100%",
  minHeight: "calc(100vh - var(--page-border-width) * 2)",
  overflow: "auto",
});