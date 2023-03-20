import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme, isNew }) =>
    isNew ? "transparent" : theme.COLORS.BACKGROUND_1000};
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  border: ${({ theme, isNew }) =>
    isNew ? `3px dashed ${theme.COLORS.GRAY_300}` : "none"};

  border-radius: 10px;
  padding-right: 16px;

  > button {
    border: none;
    background: none;
    display: inline-flex;

    > svg {
      width: 22px;
      height: 24px;
    }
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;

export const NoteItemInput = styled.input`
  height: 56px;

  // Alterei isso aqui, pq nao tava setado direito o tamanho da caixa de acordo com o valor dentro do input (o +24 inserido foi por conta do padding + width)//
  width: ${({ value }) => {
    if (!value) {
      return "180px";
    }
    return `${value?.length * 10 + 24}px`;
  }};

  display: flex;
  align-items: center;

  padding: 12px;

  color: ${({ theme }) => theme.COLORS.WHITE};
  background: transparent;

  border: none;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
`;
