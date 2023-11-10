import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: contents;
    grid-template-columns: 100% auto;
    grid-template-rows: 105px 128px auto 64px;
    grid-template-areas: 
    "brand header"
    "content"
    "newnote content";

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};

    > main {
        grid-area: auto;
        overflow-y: auto;
        display: flex;
        justify-content: center;
    }
    
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  p {
    margin-bottom: 10px;
  }

`;

export const Brand = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

export const NewNote = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  svg {
    margin-right: 8px;
  }
`;

