import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    margin-bottom: 8px;

    > input {
        color: ${({ theme }) => theme.COLORS.WHITE};
        border-radius: 10px;
        height: 56px;
        width: 100%;

        padding: 12px;
        background: #262529;
        margin: 0;
        border: 0;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.WHITE};
        }
    }
`;