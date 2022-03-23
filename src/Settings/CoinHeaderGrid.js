import React from "react";
import styled from "styled-components";
import CoinImage from "../Shared/CoinImage";

export const CoinHeaderGridStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const CoinSymbol = styled.div`
  justify-self: right;
`;

// export default function ({ name, symbol }) {
export default function ({ coin }) {
  return (
    <CoinHeaderGridStyled>
      <div style={{ alignSelf: "center" }}>{coin.CoinName}</div>
      <CoinSymbol>
        <CoinImage coin={coin} />
      </CoinSymbol>
    </CoinHeaderGridStyled>
  );
}
