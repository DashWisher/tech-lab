import Head from 'next/head';
import '../styles/globals.css';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'], // Supported language sets
  display: 'swap', // Rendering optimization
});

import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.className}>
      <Head>
        <title>TachLab</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
