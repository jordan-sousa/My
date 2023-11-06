import styled from "styled-components";

export const Container = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== "isNew",
})`
    display: flex;
    align-items: center;

    background-color: ${({ theme, isNew }) => (isNew ? "transparent" : theme.COLORS.BACKGROUND_900)};
    color: ${({ theme }) => theme.COLORS.GRAY_300};

    border: ${({ theme, isNew }) => (isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : "none")};
    
    margin-bottom: 8px;
    border-radius: 10px;

    border-right: 16px;

    > button {
        border: none;
        background: none;
    }

    .button-delete {
        color: ${({ theme }) => theme.COLORS.RED};
    }

    .button-add {
        color: ${({ theme }) => theme.COLORS.PINK};
    }

    > input {
        height: 56px;
        width: 100%;

        padding: 12px;

        color: ${({ theme }) => theme.COLORS.WHITE};
        background: none;
        border:none;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_300};
        }
    }
`;