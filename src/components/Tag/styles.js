import styled from "styled-components";

export const Container = styled.span`
    /* margin: 10px; */
    font-size: 12px;
    padding: 5px 14px;
    border-radius: 6px;
    margin-right: 10px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`;