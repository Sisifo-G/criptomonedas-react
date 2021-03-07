import React from "react";
import styled from "styled-components";

function App() {
  return (
    <Contenedor>
      <h1>Hey world! This is my Critomonedas app</h1>
    </Contenedor>
  );
}

export default App;

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;
