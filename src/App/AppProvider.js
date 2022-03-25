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
      addCoin: this.addCoin,
      removeCoin: this.removeCoin,
      setFilteredCoins: this.setFilteredCoins,
      setCurrentFavorite: this.setCurrentFavorite,
    };
  }

  savedSettings() {
    let dashboardData = JSON.parse(localStorage.getItem("cryptodashboard"));
    if (!dashboardData) {
      return { page: "Settings", firstVisit: true };
    }

    let { favorites, currentFavorite } = dashboardData;
    return { favorites, currentFavorite };
  }

  prices = async () => {
    let data = [];
    for (let i = 0; i < this.state.favorites.length; i++) {
      try {
        let priceData = await cc.priceFull(this.state.favorites[i], "USD");
        data.push(priceData);
      } catch (err) {
        console.error("Error while fetching price");
      }
    }
    return data;
  };

  fetchPrices = async () => {
    if (this.state.firstVisit) return;

    let prices = await this.prices();
    prices = prices.filter((price) => Object.keys(price).length);
    this.setState({ prices });
  };

  confirmFavorites = () => {
    let currentFavorite = this.state.favorites[0];
    this.setState(
      { firstVisit: false, page: "Dashboard", currentFavorite },
      () => {
        this.fetchPrices();
      }
    );

    localStorage.setItem(
      "cryptodashboard",
      JSON.stringify({ favorites: this.state.favorites, currentFavorite })
    );
  };

  componentDidMount = () => {
    this.fetchCoins();
    this.fetchPrices();
  };

  fetchCoins = async () => {
    cc.setApiKey(
      "160e627fd1df50af667dbbd2959655aab59089c2d88650598fb86005ddee9558"
    );
    let coinList = (await cc.coinList()).Data;
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

  setCurrentFavorite = (symbol) => {
    this.setState({ currentFavorite: symbol });
    localStorage.setItem(
      "cryptodashboard",
      JSON.stringify({
        ...JSON.parse(localStorage.getItem("cryptodashboard")),
        currentFavorite: symbol,
      })
    );
  };

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
