import "tailwindcss/tailwind.css";
import '../styles/global.css';

//starting page of application
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
