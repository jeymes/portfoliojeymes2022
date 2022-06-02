import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
width: 100%;
height: 100vh;
background-image: radial-gradient( circle 610px at 5.2% 51.6%,  rgba(5,8,114,1) 0%, rgba(7,3,53,1) 97.5% );

@media (max-width:715px) {
    justify-content: center;
    }
`;
export const SubContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;

@media (max-width:715px) {
    flex-direction: column;
    }
`;
export const ContainerDescription = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 90%;
height: 100%;
margin-inline: 20px;
cursor: pointer;
border: 1px solid rgba(20,157,208,1) ;
box-shadow: 0 0 5px rgba(20,157,208,1);
/* border: 1px solid red; */

@media (max-width:1075px) {
    width: 60%;
    height: 50vh;
    }
    @media (max-width:715px) {
    width: 90%;
    height: 40vh;
    margin-inline: 0px;
    margin-block: 10px
    }

:hover{
box-shadow: 0 0 15px rgba(20,157,208,1) ;
}

div{
    width: 95%;
}

p{
    text-align: left;
    color: white;
    font-size: 20px;
    font-weight: 500;

    @media (max-width:1075px) {
    font-size: 15px;
    }
    @media (max-width:1075px) {
    font-size: 14px;
    }
    @media (max-width:715px) {
    font-size: 12px;
    }
}
`;
export const ContainerTitle = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 90%;

h1{
    color: white;
    width: 50%;
    padding: 5px;
    border-radius: 20px;
    font-size: 40px;
    font-weight: 700;
    align-items: left;
    text-align: center;

    @media (max-width:715px) {
        font-size: 30px;
    }
}
`;
export const ContainerImg = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-inline: 20px;
width: 100%;
height: 100%;
color: white;
cursor: pointer;
border: 1px solid rgba(20,157,208,1) ;
box-shadow: 0 0 5px rgba(20,157,208,1);
/* border: 1px solid red; */

@media (max-width:1075px) {
    width: 60%;
    height: 50vh;
    }
    @media (max-width:715px) {
    width: 90%;
    height: 30vh;
    margin-inline: 0px;
    }

:hover{
box-shadow: 0 0 15px rgba(20,157,208,1) ;
}


img{
    width: 400px;

    @media (max-width:1075px) {
    width: 300px;
    }
    @media (max-width:715px) {
    width: 150px;
    }
}
`;