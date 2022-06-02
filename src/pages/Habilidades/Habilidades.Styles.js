import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
width: 100%;
height: 100vh;
background-image: radial-gradient( circle 610px at 5.2% 51.6%,  rgba(5,8,114,1) 0%, rgba(7,3,53,1) 97.5% );
`;
export const Title = styled.div`
display: flex;
width: 100%;
height: 40px;
flex-direction: column;
justify-content: center;
align-items: center;
/* border: 1px solid red; */

h1{
    color: white;
    width: 100%;
    border-radius: 20px;
    font-size: 40px;
    font-weight: 900;
    align-items: left;
    text-align: center;

    @media (max-width:600px) {
        font-size: 35px;
        
        }
}
`;

export const SubContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
height: 80%;
width: 95%;

@media (max-width:600px) {
        flex-direction: column;
        }
`;
export const Habilidades = styled.div`
display: flex;
    flex-wrap:wrap;
    justify-content: space-around;
    align-items: center;
    width: 45%;
    height: 50vh;
    cursor: pointer;
    border: 1px solid rgba(20,157,208,1) ;
    box-shadow: 0 0 5px rgba(20,157,208,1);

    @media (max-width:600px) {
        width: 70%;
        margin-block: 15px;
        }

:hover{
box-shadow: 0 0 15px rgba(20,157,208,1) ;
}
    

    img{
        width: 90px;
        @media (max-width:800px) {
            width: 70px;
        }
    }
`;
export const Ferramentas = styled.div`
display: flex;
    flex-wrap:wrap;
    justify-content: space-around;
    align-items: center;
    width: 45%;
    height: 50vh;
    cursor: pointer;
    border: 1px solid rgba(20,157,208,1) ;
    box-shadow: 0 0 5px rgba(20,157,208,1);

    @media (max-width:600px) {
        width: 70%;
        margin-block: 15px;
        }

:hover{
box-shadow: 0 0 15px rgba(20,157,208,1) ;
}

    img{
        width: 90px;

        @media (max-width:800px) {
            width: 70px;
        }
    }
`;

export const SubTitle = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

h2{
    color: white;
    font-size: 30px;
    font-weight: 700;
}
`;