import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  flex-direction: column;

  > div {
    width: 100%;
    padding: 0 123px;
  }

  > main {
    justify-content: center;
    width: 100%;
    height: 716.54px;

    flex-direction: column;

    gap: 24px;
    overflow-y: auto;
    margin-right: 180px;

    margin-bottom: 56px;
  }
`;

export const DivHeader = styled.div`
  > header {
    margin-top: 50px;
    margin-bottom: 40px;
    display: flex;
    justify-content: space-between;

    > h1 {
      font-family: "Roboto Slab";
      font-weight: 400;
    }
  }
  a {
    width: 207px;
    height: 48px;
    color: ${({ theme }) => theme.COLORS.BLACK_200};

    font-size: 16px;
    display: flex;
    border-radius: 8px;
  }
`;

export const NewNote = styled(Link)`
  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_1000};
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-right: 8px;
  }
`;
