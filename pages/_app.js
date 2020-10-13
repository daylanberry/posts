import App, { Container } from 'next/app';
import Navbar from '../components/Navbar';

const MyApp = ({ Component, pageProps }) => {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
      <div>footer</div>
    </div>
  )
}

// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`

//   return { pageProps: 'hello'}
// }


export default MyApp