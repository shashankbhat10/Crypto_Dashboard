import React from "react";
import styled from "styled-components";
import ChartConfig from "./ChartConfig";
import { CoinTile } from "../Shared/CoinTile";
import { AppContext } from "../App/AppProvider";
import ReactHighcharts from "react-highcharts";

const options = {
  chart: {
    type: "spline",
  },
  title: {
    text: "My chart",
  },
  series: [
    {
      data: [1, 2, 1, 4, 3, 6],
    },
  ],
};

const StyledChartTile = styled(CoinTile)`
  margin-top: 35px;
`;

export default function () {
  return (
    <AppContext.Consumer>
      {() => {
        return (
          <StyledChartTile>
            <ReactHighcharts config={ChartConfig()} />
          </StyledChartTile>
        );
      }}
    </AppContext.Consumer>
  );
}
