import React from "react";
import styled, { css } from "styled-components";
import { AppContext } from "../App/AppProvider";
import { CoinHeaderGridStyled } from "../Settings/CoinHeaderGrid";
import { SelectableTile } from "../Shared/CoinTile";
import { fontSize3, fontSizeBig, greenBoxShadow } from "../Shared/Styles";

const TickerPrice = styled.div`
  ${fontSizeBig};
`;

const ChangePct = styled.div`
  color: green;
  ${(props) =>
    props.red &&
    css`
      color: red;
    `}
`;

//   ${(props) =>
//     props.compact &&
//     css`
//       ${fontSize3}
//     `}

const PriceTileStyled = styled(SelectableTile)`
  ${(props) =>
    props.currentFavorite &&
    css`
      ${greenBoxShadow};
      pointer-events: none;
    `}
`;

const PriceTile = ({ symbol, data, currentFavorite, setCurrentFavorite }) => {
  console.log("currentFavorite", currentFavorite);
  let price = data.PRICE.toString();
  price = price.slice(0, price.indexOf(".") + 3);
  return (
    <PriceTileStyled
      currentFavorite={currentFavorite}
      onClick={setCurrentFavorite}>
      <CoinHeaderGridStyled>
        <div>{symbol}</div>
        <span style={{ justifySelf: "right", fontWeight: "10px" }}>
          <ChangePct red={data.CHANGEPCT24HOUR < 0}>
            <b>
              {(data.CHANGEPCT24HOUR < 0 ? "-" : "+") +
                (data.CHANGEPCT24HOUR + "").slice(0, 4)}
            </b>
          </ChangePct>
        </span>
      </CoinHeaderGridStyled>
      <TickerPrice>${price}</TickerPrice>
    </PriceTileStyled>
  );
};

// const PriceTileCompact = ({ symbol, data }) => {
//   let price = data.PRICE.toString();
//   price = price.slice(0, price.indexOf(".") + 2);
//   console.log("price", price);
//   return (
//     <PriceTileStyled>
//       <CoinHeaderGridStyled>
//         <div>{symbol}</div>
//         <span style={{ justifySelf: "right", fontWeight: "10px" }}>
//           <ChangePct red={data.CHANGEPCT24HOUR < 0}>
//             <b>
//               {(data.CHANGEPCT24HOUR < 0 ? "-" : "+") +
//                 (data.CHANGEPCT24HOUR + "").slice(0, 4)}
//             </b>
//           </ChangePct>
//         </span>
//       </CoinHeaderGridStyled>
//       {/* <TickerPrice>${(data.PRICE + "").slice(0, 7)}</TickerPrice> */}
//       <TickerPrice>${"$!" + price}</TickerPrice>
//     </PriceTileStyled>
//   );
// };

export default function ({ price, index }) {
  let symbol = Object.keys(price)[0];
  let data = price[symbol]["USD"];

  //   let TileClass = index < 5 ? PriceTile : PriceTileCompact;
  let TileClass = PriceTile;
  return (
    <AppContext.Consumer>
      {({ currentFavorite, setCurrentFavorite }) => (
        <TileClass
          symbol={symbol}
          data={data}
          currentFavorite={currentFavorite === symbol}
          setCurrentFavorite={() => setCurrentFavorite(symbol)}>
          {symbol} {data.PRICE}
        </TileClass>
      )}
    </AppContext.Consumer>
  );
}
