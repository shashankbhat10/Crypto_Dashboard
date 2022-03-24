import React from "react";
import styled from "styled-components";
import { backgroundColor2, fontSize2 } from "../Shared/Styles";

const SearchGrid = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr;
`;

const SearchInput = styled.input`
  ${backgroundColor2}
  color: white;
  ${fontSize2};
  border: 1px solid white;
  height: 35px;
  place-self: center left;
`;

export default function () {
  return (
    <SearchGrid>
      <h2>Search coins</h2>
      <SearchInput />
    </SearchGrid>
  );
}
