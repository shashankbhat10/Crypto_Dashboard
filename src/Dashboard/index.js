import React from "react";
import Page from "../Shared/Page";
import CoinDetails from "./CoinDetails";
import PriceChart from "./PriceChart";
import PriceGrid from "./PriceGrid";

export default function () {
  return (
    <Page name='Dashboard'>
      <PriceGrid />
      <PriceChart />
      <CoinDetails />
    </Page>
  );
}
