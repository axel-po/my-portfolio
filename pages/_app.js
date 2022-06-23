import "../styles/globals.css";
import Container from "../components/Container/Container";
import ContextProvider from "../context/langContext";

function MyApp({ Component, pageProps }) {
  return (
    <Container>
      <ContextProvider>
        <Component {...pageProps} />
      </ContextProvider>
    </Container>
  );
}

export default MyApp;
