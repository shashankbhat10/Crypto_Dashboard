import React from "react";
import styled from "styled-components";
import _ from "lodash";
import fuzzy from "fuzzy";
import { AppContext } from "../App/AppProvider";
import { backgroundColor2, fontSize2 } from "../Shared/Styles";

const SearchGrid = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr;
  justify-self: center;
`;

const SearchInput = styled.input`
  ${backgroundColor2}
  color: white;
  ${fontSize2};
  border: 1px solid white;
  height: 35px;
  place-self: center left;
`;

const handleSearchInputSpeed = _.debounce(
  (inputValue, coinList, setFilterCoins) => {
    let coins = Object.keys(coinList);
    let coinNames = coins.map((coin) => coinList[coin].CoinName);
    let allSearchString = coins.concat(coinNames);

    let fuzzyResults = fuzzy
      .filter(inputValue, allSearchString, {})
      .map((result) => result.string);

    console.log(fuzzyResults);
    let filteredCoins = _.pickBy(coinList, (result, symbol) => {
      let coinName = result.CoinName;
      return (
        _.includes(fuzzyResults, symbol) || _.includes(fuzzyResults, coinName)
      );
    });

    setFilterCoins(filteredCoins);
  },
  500
);

const filterCoins = (e, setFilteredCoins, coinList) => {
  let inputValue = e.target.value;
  if (!inputValue) {
    setFilteredCoins(null);
    return;
  }
  handleSearchInputSpeed(inputValue, coinList, setFilteredCoins);
};

export default function () {
  return (
    <AppContext.Consumer>
      {({ setFilteredCoins, coinList }) => (
        <SearchGrid>
          <h2>Search coins</h2>
          <SearchInput
            onKeyUp={(e) => filterCoins(e, setFilteredCoins, coinList)}
          />
        </SearchGrid>
      )}
    </AppContext.Consumer>
  );
}
