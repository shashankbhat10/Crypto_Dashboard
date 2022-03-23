import React from "react";
import { AppContext } from "../App/AppProvider";
// import CoinImage from "../Shared/CoinImage";
import {
  SelectableTile,
  DeletableTile,
  DisabledTile,
} from "../Shared/CoinTile";
import CoinHeaderGrid from "./CoinHeaderGrid";

export default function ({ coin, topSection }) {
  let TileClass = SelectableTile;
  if (topSection) TileClass = DeletableTile;

  return (
    <AppContext.Consumer>
      {({ coinList }) => {
        // let coin = coinList[coinKey];

        return (
          <TileClass>
            {/* <CoinHeaderGrid name={coin.CoinName} symbol={coin.Symbol} /> */}
            <CoinHeaderGrid topSection={topSection} coin={coin} />
            {/* {coin.CoinName} */}
          </TileClass>
        );
      }}
    </AppContext.Consumer>
  );
}
