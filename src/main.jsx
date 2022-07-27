import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./i18n";

// eslint-disable-next-line
import "swiper/css/bundle";
import Container from "./components/Container/Container";

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
      <Container>
        <App />
      </Container>
    </BrowserRouter>
);
