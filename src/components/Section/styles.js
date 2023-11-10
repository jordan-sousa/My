import styled from "styled-components";

export const Container = styled.section`
    margin: 28px;
    width: 100%;

    > h2 {
        border-bottom-width: 1px;
        /* border-bottom-style: solid; */
        border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

        /* padding-bottom: 16px; */
        margin-bottom: 24px;
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-size: 20px;
        font-weight: 400;
    }
`;