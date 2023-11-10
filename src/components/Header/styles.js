
import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;
  height: 105px;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;

  @media (min-width: 1137px) {
    padding: 0 80px;
  }
`;

export const Profiler = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  h1 {
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;

export const Search = styled.div`
  flex: 2;
  padding: 0 16px;

  @media (min-width: 768px) {
    padding: 0;
  }
`;

export const Input = styled.input`
  border-radius: 10px;
  border: none;
  height: 56px;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const User = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  > div {
    display: flex;
    flex-direction: column;
    margin-right: 16px;
    line-height: 24px;

    span {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }

  > img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }
`;

export const Logout = styled.a`
  margin-top: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-decoration: none;
`;

