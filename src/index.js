import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import client from "./utils/apolloClient";
import FloatingWhatsApp from "react-floating-whatsapp";
import { HelmetProvider } from "react-helmet-async";

const app = (
  <BrowserRouter>
    <HelmetProvider>
      <ApolloProvider client={client}>
        <App />
        {/* <FloatingWhatsApp
        phoneNumber="+923005059740"
        accountName="Living Solutions(Gibran)"
        avatar="https://res.cloudinary.com/living-solutions/image/upload/v1633761071/team-members/gibran_gduyfg.jpg"
        statusMessage="Typically replies within 10 minutes."
        allowClickAway={true}
        chatMessage="Please leave us a message."
      /> */}
      </ApolloProvider>
    </HelmetProvider>
  </BrowserRouter>
);

ReactDOM.hydrate(app, document.getElementById(`root`));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
