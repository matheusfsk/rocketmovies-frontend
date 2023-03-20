import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;

  height: 105px;
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  padding: 30px 123px;
  display: flex;

  justify-content: space-between;

  > input {
    width: 630px;
    height: 56px;
    margin: auto;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_1000};

    margin-bottom: 8px;
    border-radius: 10px;

    padding: 12px;

    color: ${({ theme }) => theme.COLORS.WHITE};

    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.WHITE_2};
    }
  }
`;

export const Rocket = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.COLORS.PINK};

  padding: 0 15px;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  padding: 0 15px;

  > a img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }

  > div {
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    margin-right: 9px;
    line-height: 24px;

    button {
      background: none;
      border: none;
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY_400};
    }

    a strong {
      font-size: 16px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;
