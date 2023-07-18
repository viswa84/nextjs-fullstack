import SocialIcons from "./SocialIcons";
import { Conatiner } from "./styles/Container.styled";
import logo2 from "./styles/images/logo_white.png";
import { Flex } from "./styles/flex.styled";
import { StyledFooter } from "./styles/Footer.styled";
const Footer = () => {
  return (
    <StyledFooter>
      <Conatiner>
        <img src={logo2} alt="fecfe" />
        <Flex>
          <ul>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </li>
            <li>+91 8464892914</li>
            <li>viswavishwnath5@gmail.com</li>
          </ul>
          <ul>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>

          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
          <SocialIcons />
        </Flex>
        <p>@copy: 2023 viswa. All rights reserved</p>
      </Conatiner>
    </StyledFooter>
  );
};

export default Footer;
