import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Mukta:wght@700&family=Open+Sans:wght@300;400;600&display=swap"
            rel="stylesheet"
          />

          <meta
            name="description"
            content="Kenai é um streaming de filme proposto como desafio na comunidade Codelândia, projeto desenvolvido utilizando Next.js e Typescript para o front-end."
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
