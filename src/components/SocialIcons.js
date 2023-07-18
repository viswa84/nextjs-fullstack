import React from "react";

import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { StyledSocialIcons } from "./styles/SocialIcons.styled";

const SocialIcons = () => {
  return (
    <StyledSocialIcons>
      <li>
        <a href="https://viswanath-portfolio.vercel.app/">
          <FaTwitter />
        </a>
      </li>
      <li>
        <a href="https://viswanath-portfolio.vercel.app/">
          <FaFacebook />
        </a>
      </li>
      <li>
        <a href="https://viswanath-portfolio.vercel.app/">
          <FaLinkedin />
        </a>
      </li>
    </StyledSocialIcons>
  );
};

export default SocialIcons;
