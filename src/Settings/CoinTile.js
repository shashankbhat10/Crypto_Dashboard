import React from "react";
import { AppContext } from "../App/AppProvider";
// import CoinImage from "../Shared/CoinImage";
import { SelectableTile } from "../Shared/CoinTile";
import CoinHeaderGrid from "./CoinHeaderGrid";

export default function ({ coin }) {
  const TileClass = SelectableTile;

  return (
    <AppContext.Consumer>
      {({ coinList }) => {
        // let coin = coinList[coinKey];

        return (
          <TileClass>
            {/* <CoinHeaderGrid name={coin.CoinName} symbol={coin.Symbol} /> */}
            <CoinHeaderGrid coin={coin} />
            {/* {coin.CoinName} */}
          </TileClass>
        );
      }}
    </AppContext.Consumer>
  );
}
