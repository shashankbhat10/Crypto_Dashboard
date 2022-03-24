import React from "react";
import { AppContext } from "../App/AppProvider";
// import CoinImage from "../Shared/CoinImage";
import {
  SelectableTile,
  DeletableTile,
  DisabledTile,
} from "../Shared/CoinTile";
import CoinHeaderGrid from "./CoinHeaderGrid";

function coinClickHandler(topSection, coin, addCoin, removeCoin) {
  return topSection
    ? () => {
        removeCoin(coin.Symbol);
      }
    : () => {
        addCoin(coin.Symbol);
      };
}

export default function ({ coin, topSection }) {
  return (
    <AppContext.Consumer>
      {({ coinList, addCoin, removeCoin, favorites }) => {
        // let coin = coinList[coinKey];
        let TileClass = SelectableTile;
        if (topSection) TileClass = DeletableTile;
        else if (favorites.includes(coin.Symbol)) TileClass = DisabledTile;

        return (
          <TileClass
            onClick={coinClickHandler(topSection, coin, addCoin, removeCoin)}>
            {/* <CoinHeaderGrid name={coin.CoinName} symbol={coin.Symbol} /> */}
            <CoinHeaderGrid topSection={topSection} coin={coin} />
            {/* {coin.CoinName} */}
          </TileClass>
        );
      }}
    </AppContext.Consumer>
  );
}
