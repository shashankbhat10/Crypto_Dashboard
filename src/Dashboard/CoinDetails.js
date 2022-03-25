import { repeat } from "lodash";
import React from "react";
import styled, { css } from "styled-components";
import { AppContext } from "../App/AppProvider";
import CoinImage from "../Shared/CoinImage";
import { fontSize2, fontSize3, fontSizeBig } from "../Shared/Styles";

const CoinDetailsStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  justify-self: space-between;
  justify-items: center;
  grid-gap: 15px;
  margin-top: 20px;
`;

const DetailStyled = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
`;

const DetailHeader = styled.span`
  font-weight: bold;
`;

const DetailValue = styled.span`
  margin-top: 5px;
`;

const Header = styled.div`
  ${fontSizeBig};
  justify-self: left;
  margin-top: 15px;
`;

export default function () {
  return (
    <AppContext.Consumer>
      {({ currentFavorite, coinList }) => {
        let coin = coinList[currentFavorite];
        let platformType =
          coin.PlatformType.slice(0, 1).toUpperCase() +
          coin.PlatformType.slice(1);

        return (
          <div>
            <Header>Details</Header>

            <CoinDetailsStyled>
              <DetailStyled>
                <DetailHeader>Coin Name</DetailHeader>
                <DetailValue>{coin.CoinName}</DetailValue>
              </DetailStyled>
              <DetailStyled>
                <DetailHeader>Created On</DetailHeader>
                <DetailValue>
                  {coinList[currentFavorite].AssetLaunchDate}
                </DetailValue>
              </DetailStyled>
              <DetailStyled>
                <DetailHeader>Algorithm</DetailHeader>
                <DetailValue>{coinList[currentFavorite].Algorithm}</DetailValue>
              </DetailStyled>
              <DetailStyled>
                <DetailHeader>Website</DetailHeader>
                <a
                  href={coin.AssetWebsiteUrl}
                  target='_blank'
                  style={{ cursor: "pointer", marginTop: "5px" }}>
                  <i className='fas fa-up-right-from-square'></i>
                </a>
              </DetailStyled>
              <DetailStyled>
                <DetailHeader>Platform Type</DetailHeader>
                <DetailValue>{platformType}</DetailValue>
              </DetailStyled>
              <DetailStyled>
                <DetailHeader>Used in Trading</DetailHeader>
                <DetailValue>
                  {coin.IsTrading ? (
                    <i
                      className='fas fa-check fa-lg'
                      style={{ color: "green" }}></i>
                  ) : (
                    <i
                      className='fas fa-times fa-lg'
                      style={{ color: "red" }}></i>
                  )}
                </DetailValue>
              </DetailStyled>
              <DetailStyled>
                <DetailHeader>Used in DeFi</DetailHeader>
                <DetailValue>
                  {coin.IsUsedInDefi !== 0 ? (
                    <i
                      className='fas fa-check fa-lg'
                      style={{ color: "green" }}></i>
                  ) : (
                    <i
                      className='fas fa-times fa-lg'
                      style={{ color: "red" }}></i>
                  )}
                </DetailValue>
              </DetailStyled>
              <DetailStyled>
                <DetailHeader>Used in NFT</DetailHeader>
                <DetailValue>
                  {coin.IsUsedInNft !== 0 ? (
                    <i
                      className='fas fa-check fa-lg'
                      style={{ color: "green" }}></i>
                  ) : (
                    <i
                      className='fas fa-times fa-lg'
                      style={{ color: "red" }}></i>
                  )}
                </DetailValue>
              </DetailStyled>
              <DetailStyled>
                <DetailHeader>Proof Type</DetailHeader>
                <DetailValue>{coin.ProofType}</DetailValue>
              </DetailStyled>
              <DetailStyled>
                <DetailHeader>Total Coins Mined</DetailHeader>
                <DetailValue>{coin.TotalCoinsMined}</DetailValue>
              </DetailStyled>
            </CoinDetailsStyled>
          </div>
        );
      }}
    </AppContext.Consumer>
  );
}
