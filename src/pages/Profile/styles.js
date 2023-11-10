import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    
    > header {
        width: 100%;
        height: 144px;

        background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
        display: flex;
        align-items: center;

        padding: 0 124px;

        svg {
            color: ${({theme}) => theme.COLORS.BACKGROUND_700};
            padding: 2px;
        }

        a {
            text-decoration: none;
            color: ${({theme}) => theme.COLORS.BACKGROUND_700};
        }
    }
`;

export const Avatar = styled.div`
    position: relative;
    margin: -124px auto 32px;

    width: 186px;
    height: 186px;

    > img {
        margin: auto;
        border-radius: 50%;
        width: 186px;
        height: 186px;

    }

    > label {
        width: 48px;
        height: 48px;

        background-color: ${({theme}) => theme.COLORS.PINK};
        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        bottom: 7px;
        right: 7px;
        cursor: pointer;
    }

    svg {
        width: 444444444444444444444px;
        
    }
`;

export const Form = styled.form`
    max-width: 340px;
    margin: 30px auto 0;
    
    > div:nth-child(4) {
        margin-top: 24px;
    }
     
`;

