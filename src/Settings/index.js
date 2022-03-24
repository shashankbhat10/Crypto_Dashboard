import React from "react";
import Page from "../Shared/Page";
import CoinGrid from "./CoinGrid";
import ConfirmButton from "./ConfirmButton";
import Welcome from "./Welcome";

export default function () {
  return (
    <Page name='Settings'>
      <Welcome />
      <CoinGrid topSection />
      <ConfirmButton />
      <CoinGrid />
    </Page>
  );
}
