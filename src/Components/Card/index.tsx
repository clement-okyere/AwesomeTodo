import React from "react";
import styled from "styled-components";

type ICardProp = {
    children: React.ReactNode;
}

const StyledCardWrapper = styled.div`
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 1em 1em 1em 1em;
  padding: 1em;
  max-width: max-content;
`;
const Card = ({children}: ICardProp) => {
    return (
    <StyledCardWrapper>
        {children}
    </StyledCardWrapper>
    )
}

export default Card;