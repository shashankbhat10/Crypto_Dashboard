import React, { useEffect } from "react";

const cc = require("cryptocompare");

export const AppContext = React.createContext();

export class AppProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "Dashboard",
      ...this.savedSettings(),
      setPage: this.setPage,
      confirmFavorites: this.confirmFavorites,
      favorites: ["BTC", "ETH", "XMR", "DOGE"],
    };
  }

  savedSettings() {
    let dashboardData = JSON.parse(localStorage.getItem("cryptodashboard"));
    if (!dashboardData) {
      return { page: "Settings", firstVisit: true };
    }
    return {};
  }

  confirmFavorites = () => {
    console.log("Test");
    this.setState({ firstVisit: false, page: "Dashboard" });

    localStorage.setItem("cryptodashboard", JSON.stringify({ test: "hello" }));
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

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
