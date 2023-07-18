import React from "react";

import igm1 from "./styles/images/illustration-your-users.png";
import { StyledCard } from "./styles/Card.styled";

const Card = (props) => {
  const {
    item: { id, title, body, image },
  } = props;
  return (
    <StyledCard layout= {id % 2 === 0 && 'row-reverse' }>
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
      <div>
        <img src={igm1} alt="bb" />
      </div>
    </StyledCard>
  );
};

export default Card;
