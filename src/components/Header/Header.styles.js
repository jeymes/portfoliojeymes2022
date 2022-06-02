import styled from "styled-components";

export const Container = styled.header`
width: 100%;
height: 11vh;
display:flex;
justify-content: space-around;
align-items: center;
border-bottom: 1px solid rgba(20,157,208,1) ;
box-shadow: 0 0 5px rgba(20,157,208,1);
background-image: radial-gradient( circle 610px at 5.2% 51.6%,  rgba(5,8,114,1) 0%, rgba(7,3,53,1) 97.5% );

p{
    color: white;
    font-size: 20px;
    font-weight: 600;

    :hover{
        opacity: 50%;
    }

    @media (max-width: 700px){
        font-size: 15px;
        font-weight: 400px;
    }
    @media (max-width: 450px){
        font-size: 13px;
        font-weight: 0;
    }
}
`;
export const ContainerButton = styled.div`
    
    button{
    padding: 10px 32px;
    text-align: center;
    border-radius: 10px;
    border: none;
    color: white;
    font-size: 15px;
    font-weight: 700;
    background-image: linear-gradient( 65.9deg,  rgba(85,228,224,1) 5.5%, rgba(75,68,224,0.74) 54.2%, rgba(64,198,238,1) 55.2%, rgba(177,36,224,1) 98.4% );

    :hover{
        opacity: 80%;
        background-image: radial-gradient( circle 300px at 8% 89.3%,  rgba(20,157,208,1) 0%, rgba(140,63,226,1) 90% );

    }
    @media (max-width: 700px){
        padding: 8px 28px;
    }
    @media (max-width: 450px){
        padding: 5px 20px;
    }
    }
`;