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

function getLowerSectionCoins(coinArray, filteredCoins) {}

function getCoins(coinList, topSection, favorites, filteredCoins) {
  //   console.log(filteredCoins);
  let coinArray = coinListObjectToArray(coinList);
  coinArray.sort((a, b) =>
    parseInt(a.SortOrder) < parseInt(b.SortOrder) ? -1 : 1
  );

  //   return Object.keys(coinList).slice(0, 100);
  //   console.log(coinArray.slice(0, 100));
  console.log(coinArray[0]);
  // console.log(
  //   coinArray.filter((coin) => coin.IsUsedInDefi && coin.IsUsedInDefi !== 0)[1]
  // );
  let filteredCoinsArray = [];
  if (filteredCoins) {
    filteredCoinsArray = coinListObjectToArray(filteredCoins).map(
      (coin) => coin.Symbol
    );
  }

  return topSection
    ? coinArray.filter((coin) => favorites.includes(coin.Symbol))
    : filteredCoins
    ? coinArray.filter((coin) => filteredCoinsArray.includes(coin.Symbol))
    : coinArray.slice(0, 100);
}

export default function ({ topSection }) {
  return (
    <AppContext.Consumer>
      {({ coinList, favorites, filteredCoins }) => (
        <CoinGridStyled>
          {getCoins(coinList, topSection, favorites, filteredCoins).map(
            (coin) => (
              <CoinTile coin={coin} topSection={topSection} key={coin.Symbol} />
            )
          )}
        </CoinGridStyled>
      )}
    </AppContext.Consumer>
  );
}
