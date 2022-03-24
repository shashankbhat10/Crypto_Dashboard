import React from "react";
import styled from "styled-components";
import { AppContext } from "../App/AppProvider";
import { SelectableTile } from "../Shared/CoinTile";
import CoinTile from "./CoinTile";

const CoinGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 15px;
  margin-top: 40px;
`;

function coinListObjectToArray(coinList) {
  let coins = [];
  let coinKeys = Object.keys(coinList);
  let undefKey = 0;
  for (let i = 0; i < coinKeys.length; i++) {
    coins.push(coinList[coinKeys[i]]);
  }
  //   for (let coin in coinKeys) {
  //     if (coinList[coin] === undefined) undefKey++;
  //     coins.push(coinList[coin]);
  //   }

  //   console.log(undefKey);
  //   console.log(coins.length);
  //   console.log(coins.slice(0, 100));

  return coins;
}

function getCoins(coinList, topSection, favorites) {
  console.log(typeof coinList);
  let coinArray = coinListObjectToArray(coinList);
  coinArray.sort((a, b) =>
    parseInt(a.SortOrder) < parseInt(b.SortOrder) ? -1 : 1
  );

  //   return Object.keys(coinList).slice(0, 100);
  console.log(coinArray.slice(0, 100));
  //   console.log(favorites);
  //   console.log(coinArray.filter((coin) => favorites.includes(coin.Symbol)));
  //   console.log(coinArray[0].Symbol === favorites[0]);
  return topSection
    ? coinArray.filter((coin) => favorites.includes(coin.Symbol))
    : coinArray.slice(0, topSection ? 10 : 100);
}

export default function ({ topSection }) {
  return (
    <AppContext.Consumer>
      {({ coinList, favorites }) => (
        <CoinGridStyled>
          {getCoins(coinList, topSection, favorites).map((coin) => (
            <CoinTile coin={coin} topSection={topSection} />
          ))}
        </CoinGridStyled>
      )}
    </AppContext.Consumer>
  );
}
