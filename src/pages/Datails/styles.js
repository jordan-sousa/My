import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    grid-template-rows: 105px auto;
    grid-template-areas: 
    "header"
    "content";

    > main {
        width: 100%;
        grid-area: content;
        overflow-y: auto;
    }

    .tags {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
`;

export const Content = styled.div`
    max-width: 1137px;
    margin: 38px auto;

    svg{
        color: ${({theme}) => theme.COLORS.PINK};
    }

    a {
        font-size: 20px;
        color: ${({theme}) => theme.COLORS.PINK};
    }

    div {
        margin-bottom: 10px;

    img {
        width: 15px;
        height: 16px;
        border-radius: 50%;
    }

    }
    p {
        margin-top: 20px;
    }
`;

