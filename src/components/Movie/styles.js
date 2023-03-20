import styled from "styled-components";

export const DivMain = styled.div`
  margin-bottom: 40px;
  background: rgba(255, 133, 155, 0.05);
  border-radius: 16px;
  padding: 32px;
  margin-right: 16px;
  gap: 15px;
  transition: transform 0.3s;
  cursor: pointer;
  max-height: 250px;

  > p {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  > h2 {
    margin-bottom: 8px;
  }

  :hover {
    transform: scale(1.01);
  }

  .stars {
    margin-bottom: 15px;
    color: ${({ theme }) => theme.COLORS.PINK};

    > svg {
      margin-right: 5px;
    }
  }

  > p {
    margin-bottom: 15px;
  }

  .tags {
    > span {
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
      color: ${({ theme }) => theme.COLORS.WHITE_3};
    }
  }
`;
