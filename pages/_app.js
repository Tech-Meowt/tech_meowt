import Layout from '../components/Layout';
import '../styles/globals.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <Layout pageTitle='Tech Meowt' description='Tech Meowt'>
      <Component {...pageProps} />
    </Layout>
  );
}
