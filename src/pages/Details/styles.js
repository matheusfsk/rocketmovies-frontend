import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  flex-direction: column;

  > main {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    flex-direction: column;

    gap: 24px;

    margin-right: 180px;

    padding-left: 218px;

    padding-bottom: 60px;

    .buttonDeleteMovie {
      background-color: ${({ theme }) => theme.COLORS.BLACK_100};
      color: ${({ theme }) => theme.COLORS.PINK};
      width: 390px;
    }
  }
`;

export const DivHeader = styled.div`
  width: 1137px;
  height: 581px;
  margin-top: 40px;
  overflow-y: auto;

  a {
    width: 70px;
    color: ${({ theme }) => theme.COLORS.PINK};
    font-weight: 400;
    font-size: 16px;
    display: flex;
    align-items: center;

    > svg {
      margin-right: 8px;
    }
  }

  .divTitle {
    display: flex;
    align-items: center;
    margin: 24px 0;

    > h1 {
      font-weight: 500;
      font-size: 36px;
      line-height: 47px;
      margin-right: 19px;
    }

    > svg {
      color: ${({ theme }) => theme.COLORS.PINK};
      width: 20px;
      height: 20px;
      margin-right: 10px;
    }
  }
  .divAuthor {
    display: flex;
    align-items: flex-end;
    margin-bottom: 40px;

    > img {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      margin-right: 8px;
    }

    > span {
      margin-right: 8px;
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 19px;
    }

    > svg {
      color: ${({ theme }) => theme.COLORS.PINK};
      width: 20px;
      height: 20px;
      margin-right: 8px;
    }
  }

  .tags {
    margin-bottom: 40px;
    > span {
      background-color: ${({ theme }) => theme.COLORS.PINK3};
      color: ${({ theme }) => theme.COLORS.WHITE_3};
    }
  }

  p {
    line-height: 21px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    display: flex;
    align-items: center;
    text-align: justify;
    margin-right: 24px;
  }
`;
