import styled from "styled-components";


export const Tecnologias = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
width:100%;
margin-top: 20px;

.tech{
display: flex;
justify-content: center;
align-items: center;
width:100%;
height: 20px;

button{
    font-size: 22px;
    width:100%;
    height: 30px;
    border: none;
    border-radius: 10px;
    background-image: linear-gradient( 65.9deg,  rgba(85,228,224,1) 5.5%, rgba(75,68,224,0.74) 54.2%, rgba(64,198,238,1) 55.2%, rgba(177,36,224,1) 98.4% );
    color: white;
    font-weight: 700;
    cursor: pointer;

    @media (max-width: 650px) {
        padding: 2px 5px;
        font-size: 20px;
}
@media (max-width: 580px) {
        padding: 2px 5px;
        font-size: 15px;
}

    :hover{
        opacity: 80%;
        background-image: radial-gradient( circle 300px at 8% 89.3%,  rgba(20,157,208,1) 0%, rgba(140,63,226,1) 90% );

    }
}
}

.desc{
display: flex;
justify-content: space-evenly;
align-items: center;
width:100%;
margin-top: 15px;


.Html{
    background-color: red;
    padding: 5px;
    font-size: 15px;
    border-radius: 5px;
    font-weight: 700;

    @media (max-width: 650px) {
        font-size: 13px;
}
@media (max-width: 580px) {
        font-size: 12px;
        padding: 2px;
}
@media (max-width: 430px) {
        font-size: 12px;
        padding: 1px;
}
}
.React{
    background-color: blueviolet;
    font-size: 15px;
    padding: 5px;
    border-radius: 5px;
    font-weight: 700;

    @media (max-width: 650px) {
        font-size: 13px;
}
@media (max-width: 580px) {
        font-size: 12px;
        padding: 2px;
}
@media (max-width: 430px) {
        font-size: 12px;
        padding: 1px;
}
}
.Styled{
    background-color: #C71585;
    font-size: 15px;
    border-radius: 5px;
    padding: 5px;
    font-weight: 700;

    @media (max-width: 650px) {
        font-size: 13px;
}
@media (max-width: 580px) {
        font-size: 12px;
        padding: 2px;
}
@media (max-width: 430px) {
        font-size: 12px;
        padding: 1px;
}
}
.JavaScript{
    background-color: yellow;
    font-size: 15px;
    color: black;
    border-radius: 5px;
    padding: 5px;
    font-weight: 700;

    @media (max-width: 650px) {
        font-size: 13px;
}
@media (max-width: 580px) {
        font-size: 12px;
        padding: 2px;
}
@media (max-width: 430px) {
        font-size: 12px;
        padding: 1px;
}
}
.Css{
    background-color: #48D1CC;
    font-size: 15px;
    color: white;
    border-radius: 5px;
    padding: 5px;
    font-weight: 700;

    @media (max-width: 650px) {
        font-size: 13px;
}
@media (max-width: 580px) {
        font-size: 13px;
        padding: 2px;
}
@media (max-width: 430px) {
        font-size: 12px;
        padding: 1px;
}
}
}
`;