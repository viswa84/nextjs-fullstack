import React from "react";
import { ThemeProvider } from "styled-components";
import { Conatiner } from "./components/styles/Container.styled";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import GlobalStyles from "./components/styles/Golbal";
import content from "./content";
import img1 from "./components/styles/images/illustration-flowing-conversation.png";

const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
  },
  mobile: "768px",
};
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Conatiner>
          {content.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </Conatiner>
        <Footer />
      </>
    </ThemeProvider>
  );
};

export default App;
