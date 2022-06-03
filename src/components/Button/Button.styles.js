import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
`;

export const Description = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 10px;

p{
    color: #ccc;
    font-weight: 200;
    text-align: center;
}
@media (max-width:840px) {
    padding: 5px;
    }
    @media (max-width:430px) {
    font-size: 12px;
    }
`;

export const ContainerButton = styled.div`
display: flex;
justify-content: center;
align-items: center;
/* border: 1px solid red; */

@media (max-width:400px) {
        flex-direction: column;
    }
`;

export const ButtonContato = styled.div`
    padding: 15px 100px;
    text-align: center;
    border-radius: 10px;
    border: none;
    color: white;
    font-size: 20px;
    font-weight: 700;
    margin-inline:10px;
    cursor: pointer;
    background-image: linear-gradient( 65.9deg,  rgba(85,228,224,1) 5.5%, rgba(75,68,224,0.74) 54.2%, rgba(64,198,238,1) 55.2%, rgba(177,36,224,1) 98.4% );

    :hover{
        opacity: 80%;
        background-image: radial-gradient( circle 300px at 8% 89.3%,  rgba(20,157,208,1) 0%, rgba(140,63,226,1) 90% );

    }
    @media (max-width:875px) {
        padding: 10px 85px;
    }
    @media (max-width:840px) {
        padding: 10px 80px;
        margin-inline:5px;
    }
    @media (max-width:715px) {
        padding: 10px 80px;
    }
    @media (max-width:555px) {
        margin-inline:3px;
        padding: 10px 50px;
    }
    @media (max-width:430px) {
        padding: 6px 40px;
        margin-block: 10px;
    }
`;
export const ButtonQuemSou = styled.div`
    padding: 15px 100px;
    text-align: center;
    border-radius: 10px;
    border: none;
    color: white;
    font-size: 20px;
    font-weight: 700;
    margin-inline:10px;
    cursor: pointer;
    background-image: linear-gradient( 78.1deg,  rgba(177,14,236,1) 5.5%, rgba(255,19,15,1) 92.8% );

    :hover{
        opacity: 80%;
        background-image: radial-gradient( circle 300px at 8% 89.3%,  rgba(140,63,226,1) 5%, rgba(177,14,236,1) 90% );

    }
    @media (max-width:875px) {
        padding: 10px 85px;
    }
    @media (max-width:840px) {
        padding: 10px 80px;
        margin-inline:5px;
    }
    @media (max-width:715px) {
        padding: 10px 80px;
    }
    @media (max-width:555px) {
        margin-inline:3px;
        padding: 10px 50px;
    }
    @media (max-width:430px) {
        padding: 6px 40px;
        margin-block: 10px;
    }
`;