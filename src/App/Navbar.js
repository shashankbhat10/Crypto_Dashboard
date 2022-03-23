import React from "react";
import styled, { css } from "styled-components";
import { AppContext } from "./AppProvider";

const Bar = styled.div`
  display: grid;
  margin-bottom: 30px;
  grid-template-columns: 250px auto 100px 100px;
`;

const Logo = styled.div`
  font-size: 1.5em;
`;

const ControlButtonElement = styled.div`
  cursor: pointer;
  ${(props) =>
    props.active &&
    css`
      color: blue;
    `}
`;

function ControlButton({ name }) {
  return (
    <AppContext.Consumer>
      {({ page, setPage }) => (
        <ControlButtonElement
          active={page === name}
          onClick={() => setPage(name)}>
          {name}
        </ControlButtonElement>
      )}
    </AppContext.Consumer>
  );
}

export default function NavBar() {
  return (
    <Bar>
      <Logo>Crypto Dashboard</Logo>
      <div />
      <ControlButton active name='Dashboard' />
      <ControlButton name='Settings' />
    </Bar>
  );
}
