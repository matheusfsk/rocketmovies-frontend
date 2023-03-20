import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
    "header"
    "content";

  > main {
    justify-content: center;
    width: 100%;
    padding-left: 15px;
    display: flex;
    grid-area: content;
    overflow-y: auto;
  }
  .tags {
    display: flex;

    height: 88px;

    background: ${({ theme }) => theme.COLORS.BLACK_100};
    border-radius: 8px;
    gap: 40px;
    padding: 16px;
  }
`;

export const Form = styled.form`
  width: 1137px;
  height: 783px;
  margin-bottom: 85px;
  padding-bottom: 16px;

  a {
    margin-top: 40px;
    color: ${({ theme }) => theme.COLORS.PINK};
    font-weight: 400;
    font-size: 16px;
    display: flex;
    align-items: center;

    > svg {
      color: ${({ theme }) => theme.COLORS.PINK};
      margin-right: 8px;
    }
  }
  > header {
    margin-bottom: 36px;

    > h1 {
      margin-top: 24px;
    }
  }

  .containerTitle {
    display: flex;
    gap: 40px;
    margin-bottom: 40px;
  }

  .buttons {
    display: flex;
    gap: 40px;
  }

  .buttonDeleteMovie {
    background-color: ${({ theme }) => theme.COLORS.BLACK_100};
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;
