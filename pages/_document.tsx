import Document, { Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    const setThemeMode = `
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }
      `;

    const ga = `window.dataLayer = window.dataLayer || [];
           `;
    return (
      <Html lang="pt-br">
        <Head>
          <link href="/static/favicon.ico" rel="shortcut icon" />
        </Head>

        <body>
          <script dangerouslySetInnerHTML={{ __html: setThemeMode }} />
          <script dangerouslySetInnerHTML={{ __html: ga }} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
