import { Box } from "@mui/material";
import styled from "styled-components";

export const StyledH1 = styled.h1`
  text-align: center;
`;

export const StyledBox = styled(Box)`
  width: 50%;
  min-width: 200px;
  background-color: ${({ theme }) => theme.colors.ghostwhite};
  border-radius: 20px;
  padding: 10px 30px;
  box-shadow: 5px 10px 8px 0px ${({ theme }) => theme.colors.lightgrey};
  margin-bottom: 20px;
`;
