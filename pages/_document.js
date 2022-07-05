// eslint-disable-next-line @next/next/no-document-import-in-page
import { Html, Head, Main, NextScript } from "next/document";
import { hotjar } from "react-hotjar";

hotjar.initialize(hjid, hjsv);

// Identify the user
hotjar.identify("USER_ID", { userProperty: 2926235 });

// Add an event
hotjar.event("button-click");

// Update SPA state
hotjar.stateChange("/");

export default function Document() {
  return (
    <Html lang='fr' className='h-full'>
      <Head></Head>
      <body className='h-full'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
