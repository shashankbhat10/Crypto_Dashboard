import React from "react";
import styled from "styled-components";
import { AppContext } from "../App/AppProvider";
import PriceTile from "./PriceTile";

const PriceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  overflow-x: auto;
  grid-auto-flow: column;
  grid-auto-columns: minmax(250px, 1fr);
  padding: 10px 2px;
  grid-gap: 15px;
  margin-top: 35px;
`;

export default function () {
  return (
    <AppContext.Consumer>
      {({ prices }) => (
        <PriceGrid>
          {prices.map((price, index) => (
            <PriceTile price={price} index={index} />
          ))}
        </PriceGrid>
      )}
    </AppContext.Consumer>
  );
}
