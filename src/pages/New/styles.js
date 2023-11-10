import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
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

export const Form = styled.form`
    max-width: 1137px;
    margin: 38px auto;
`;

export const TagsContainer = styled.div`
    max-width: 1137px;
    margin: 38px auto;
`;

