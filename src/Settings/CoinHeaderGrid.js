import React from "react";
import styled from "styled-components";
import CoinImage from "../Shared/CoinImage";
import { DeletableTile } from "../Shared/CoinTile";

export const CoinHeaderGridStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const CoinSymbol = styled.div`
  justify-self: right;
`;

const DeleteIcon = styled.div`
  justify-self: right;
  display: none;
  ${DeletableTile}: hover & {
    display: block;
    color: red;
  }
`;

const TopSectionImage = styled.div`
  justify-self: right;
  display: block;
  ${DeletableTile}: hover & {
    display: none;
  }
`;

const TopSectionIcon = styled.i`
  justify-self: right;
  display: none;
  ${DeletableTile}: hover & {
    display: block;
    margin-top: 11px;
    margin-bottom: 11px;
    margin-right: 15px;
  }
`;

// export default function ({ name, symbol }) {
export default function ({ coin, topSection }) {
  return (
    <CoinHeaderGridStyled>
      <div style={{ alignSelf: "center" }}>{coin.CoinName}</div>
      <CoinSymbol>
        {topSection ? (
          <TopSectionImage>
            <CoinImage coin={coin} />
          </TopSectionImage>
        ) : (
          <CoinImage coin={coin} />
        )}
        {topSection && (
          <TopSectionIcon
            className='fas fa-times fa-2x'
            style={{ color: "red" }}></TopSectionIcon>
        )}
      </CoinSymbol>
    </CoinHeaderGridStyled>
  );
}
