import Layout from '../components/Layout';

import 'bootstrap/dist/css/bootstrap.css';
import '../styles/global.scss';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp

