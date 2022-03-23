import styled from "styled-components";
import {
  greenBoxShadow,
  lightBlueBackground,
  redBoxShadow,
  subtleBoxShadow,
} from "./Styles";

export const CoinTile = styled.div`
  ${subtleBoxShadow};
  ${lightBlueBackground};
  padding: 10px;
`;

export const SelectableTile = styled(CoinTile)`
  &:hover {
    cursor: pointer;
    ${greenBoxShadow}
  }
`;

export const DeletableTile = styled(SelectableTile)`
  &:hover {
    cursor: pointer;
    ${redBoxShadow}
  }
`;

export const DisabledTile = styled(CoinTile)`
  pointer-events: none;
  opacity: 0.4;
`;
