import styled from "styled-components";

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 11vh;
border-top: 1px solid white;
background-image: radial-gradient( circle 610px at 5.2% 51.6%,  rgba(5,8,114,1) 0%, rgba(7,3,53,1) 97.5% );

h4{
    text-align: center;
    color: white;
    font-weight: 700;

    @media (max-width:600px) {
        font-size: 13px;
    }
}
`;