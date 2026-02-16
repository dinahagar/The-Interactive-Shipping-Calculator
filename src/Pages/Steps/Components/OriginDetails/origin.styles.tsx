import styled from "styled-components";

export const StyledCodeDiv = styled.div`
  display: flex;
  gap: 5%;
`;

export const StyledP = styled.div`
  text-align: center;
  font-size: 22px;
  font-weight: 500;
  padding: 30px 30px 0px 30px;
`;

export const StyledForm = styled.form`
  display: grid;
  width: 50%;
  gap: 20px;
`;

export const StyledFormDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledSpan = styled.span`
  color: ${({ theme }) => theme.colors.error};
`;

export const StyledNote = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  justify-content: center;
  padding: 10px 0px 30px 0px;
  font-size: 14px;
`;
