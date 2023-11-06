import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.PINK};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

    top: 875px;
    left: 497px;
    height: 56px;
    margin: 16px 0;
    padding: 0 16px;
    border-radius: 10px;

    &:disabled{
        opacity: 0.5;
    }
`;