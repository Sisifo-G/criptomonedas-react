import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Formulario from "./components/Formulario";
import imagen from "./cryptomonedas.png";
import Cotizacion from "./components/Cotizacion";
import MyLoader from "./components/MyLoader";

function App() {
  const [moneda, guardarMoneda] = useState("");
  const [criptomoneda, guardarCriptomoneda] = useState("");
  const [resultado, guardarResultado] = useState({});
  const [cargando, guardarCargando] = useState(false);

  useEffect(() => {
    const cotizarCriptomoneda = async () => {
      // Evitamos la ejecución la primera vez
      if (moneda === "") return;

      // Consultar la API para obtener la cotización
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
      const resultado = await axios.get(url);

      //Mostrar Loader o spinner
      guardarCargando(true);

      // Ocultar Loader(spinner) y mostrar resultado
      setTimeout(() => {
        // Cambiar estado de Cargando
        guardarCargando(false);

        // Guardar cotización
        guardarResultado(resultado.data.DISPLAY[criptomoneda][moneda]);
      }, 3000);
    };
    cotizarCriptomoneda();
  }, [moneda, criptomoneda]);

  // Mostrar Loader(Spinner) o resultado
  const componente = cargando ? (
    <MyLoader />
  ) : (
    <Cotizacion resultado={resultado} />
  );

  return (
    <Contenedor>
      <div>
        <Imagen src={imagen} alt="Imagen Criptomonedas" />
      </div>
      <div>
        <Heading>Cotiza Criptomonedas al Instante</Heading>
        {componente}
        <Formulario
          guardarMoneda={guardarMoneda}
          guardarCriptomoneda={guardarCriptomoneda}
        />
      </div>
    </Contenedor>
  );
}

export default App;

const Contenedor = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Imagen = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;

const Heading = styled.div`
  font-family: "Bebas Neue", cursive;
  color: #fff;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;

  &::after {
    content: "";
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
  }
`;
