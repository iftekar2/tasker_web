import React from "react";
import styled from "styled-components";

function footer() {
  return (
    <FooterContainer>
      <p>© 2025 Taskar</p>

      <p>Travel, reimagined.</p>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;

  @media (max-width: 480px) {
    flex-direction: row;
    gap: 10px;
    text-align: center;
  }

  p {
    color: grey;
    font-size: 14px;
    margin: 0;
  }
`;

export default footer;
