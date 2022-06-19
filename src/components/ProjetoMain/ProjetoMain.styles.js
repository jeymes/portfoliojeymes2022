import styled from "styled-components";

export const ContainerProjeto = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
width: 600px;
height: 400px;
color: white;
margin-block: 20px;
border: 1px solid rgba(20,157,208,1) ;
box-shadow: 0 0 5px rgba(20,157,208,1);

@media (max-width: 650px) {
    width: 550px;
}
@media (max-width: 580px) {
    width: 400px;
    height: 300px;
}
@media (max-width: 500px) {
    width: 350px;
    height: 300px;
}

:hover{
box-shadow: 0 0 15px rgba(20,157,208,1) ;
}
`;
export const TitleProjeto = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 30px;

h3{
    color: white;
    font-size: 25px;
}`;
export const SubProjeto = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

img{
    width: 500px;
    border-radius: 10px;

    @media (max-width: 650px) {
    width: 450px;
}
@media (max-width: 580px) {
    width: 300px;
}
}
`;

export const ContainerTech = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;