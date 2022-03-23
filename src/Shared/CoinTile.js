import styled from "styled-components";
import { greenBoxShadow, lightBlueBackground, subtleBoxShadow } from "./Styles";

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
