import "../styles/globals.css";
import { Amplify } from "aws-amplify";
import awsmobile from "./aws-exports";
Amplify.configure({ ...awsmobile, ssr: true });

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
