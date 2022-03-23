import React from "react";
import { AppContext } from "../App/AppProvider";

export default function Welcome({ firstVisit }) {
  return (
    <AppContext.Consumer>
      {({ firstVisit }) =>
        firstVisit ? (
          <h1>
            Welcome to Crypto Dashboard! Please select few coins as favorites to
            begin with
          </h1>
        ) : null
      }
    </AppContext.Consumer>
  );
}
