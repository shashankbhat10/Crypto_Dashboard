import React, { useEffect } from "react";

const cc = require("cryptocompare");

export const AppContext = React.createContext();

const MAX_FAVORITES = 15;

export class AppProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "Dashboard",
      ...this.savedSettings(),
      setPage: this.setPage,
      confirmFavorites: this.confirmFavorites,
      favorites: ["BTC", "ETH", "XMR", "DOGE"],
      addCoin: this.addCoin,
      removeCoin: this.removeCoin,
      setFilteredCoins: this.setFilteredCoins,
    };
  }

  savedSettings() {
    let dashboardData = JSON.parse(localStorage.getItem("cryptodashboard"));
    if (!dashboardData) {
      return { page: "Settings", firstVisit: true };
    }

    let { favorites } = dashboardData;
    return { favorites };
  }

  confirmFavorites = () => {
    console.log("Test");
    this.setState({ firstVisit: false, page: "Dashboard" });

    localStorage.setItem(
      "cryptodashboard",
      JSON.stringify({ favorites: this.state.favorites })
    );
  };

  componentDidMount = () => {
    this.fetchCoins();
  };

  fetchCoins = async () => {
    cc.setApiKey(
      "160e627fd1df50af667dbbd2959655aab59089c2d88650598fb86005ddee9558"
    );
    let coinList = (await cc.coinList()).Data;
    console.log(coinList);
    this.setState({ coinList });
  };

  setPage = (page) => this.setState({ page });

  addCoin = (coinKey) => {
    let favorites = [...this.state.favorites];
    if (favorites.length < MAX_FAVORITES && !favorites.includes(coinKey)) {
      favorites.push(coinKey);
      this.setState({ favorites });
    }
  };

  removeCoin = (coinKey) => {
    let favorites = [...this.state.favorites];

    if (favorites.length !== 0 && favorites.includes(coinKey)) {
      favorites.splice(favorites.indexOf(coinKey), 1);
      this.setState({ favorites });
    }
  };

  setFilteredCoins = (filteredCoins) => this.setState({ filteredCoins });

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
