import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
width: 100%;
background-image: radial-gradient( circle 610px at 5.2% 51.6%,  rgba(5,8,114,1) 0%, rgba(7,3,53,1) 97.5% );
`;
export const ContainerTitle = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;

h1{
    color: white;
    width: 50%;
    padding: 5px;
    border-radius: 20px;
    font-size: 40px;
    font-weight: 700;
    align-items: left;
    text-align: center;
}
`;
export const SubContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
align-items: center;
width: 100%;
`;