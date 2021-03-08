import React from "react";
import styled from "styled-components";

const Error = ({ mensaje }) => {
  return <MensajeError>{mensaje}</MensajeError>;
};

export default Error;

const MensajeError = styled.p`
  background: #fc7f34;
  padding: 1rem;
  color: #2b190e;
  font-size: 30px;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  font-family: "Bebas Neue", cursive;
  border-radius: 8px;
`;
