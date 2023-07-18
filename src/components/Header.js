import React from "react";
import { Logo, Nav, StyledHeader,Image } from "./styles/Header.styled";
import { Conatiner } from "./styles/Container.styled";
import { Button } from "./styles/Button.styled";
import { Flex } from "./styles/flex.styled";
import ig1 from "./styles/images/logo.png"

const Header = () => {
  return (
    <StyledHeader>
      <Conatiner>
        <Nav>
          <Logo
            src={ig1}
            alt="vv"
          />
          <Button>Try It Free</Button>
        </Nav>
        <Flex>
          <div>
            <h1> Build the Comnunity Your Fans Will Love </h1>
            <p>
              Huddle re-imagens the way we build communites You have a voice ,
              but so does your audience . Create connections with your users as
              you engage in genuine discuttion
            </p>
            <Button bg="#ff0099" color="#fff">
              Get Started For Free
            </Button>
          </div>
          <Image src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/makers_experience_perseus/apps/Illustration-value-5.2df17db.svg" alt=" vvimage" />
        </Flex>
      </Conatiner>
    </StyledHeader>
  );
};

export default Header;
