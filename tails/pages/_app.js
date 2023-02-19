import "../styles/globals.css";
import { Amplify } from "aws-amplify";

export default function App({ Component, pageProps }) {
  require("dotenv").config();
  Amplify.configure({
    aws_project_region: process.env.aws_project_region,
    aws_appsync_graphqlEndpoint: process.env.aws_appsync_graphqlEndpoint,
    aws_appsync_region: process.env.aws_appsync_region,
    aws_appsync_authenticationType: process.env.aws_appsync_authenticationType,
    aws_appsync_apiKey: process.env.aws_appsync_apiKey,
    ssr: true,
  });

  return <Component {...pageProps} />;
}
