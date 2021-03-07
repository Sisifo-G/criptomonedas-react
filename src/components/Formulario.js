import React from "react";
import styled from "styled-components";

import useMoneda from "../hooks/useMoneda";
import useCriptomoneda from "../hooks/useCriptomoneda";

const Formulario = () => {
  // Utilizar useMoneda

  const MONEDAS = [
    { codigo: "COP", nombre: "Peso Colombiano" },
    { codigo: "EUR", nombre: "Euro" },
    { codigo: "MXN", nombre: "Peso Mexicano" },
    { codigo: "USD", nombre: "Dolar de Estados Unidos" },
  ];
  const [moneda, SelectMonedas] = useMoneda("Elige tu Moneda", "", MONEDAS);

  // Utilizar useCriptomoneda
  const [criptomoneda, SelectCripto] = useCriptomoneda(
    "Elige tu Criptomoneda",
    ""
  );

  return (
    <form>
      <SelectMonedas />
      <SelectCripto />
      <Boton type="submit" value="Calcular" />
    </form>
  );
};

export default Formulario;

const Boton = styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #66a2fe;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #fff;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #326ac0;
    cursor: pointer;
  }
`;
