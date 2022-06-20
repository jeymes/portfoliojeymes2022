import styled from "styled-components";

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
width:100%;
margin-top: 20px;

button{
    width:90%;
    height: 30px;
    border: none;
    border-radius: 10px;
    background-image: linear-gradient( 65.9deg,  rgba(85,228,224,1) 5.5%, rgba(75,68,224,0.74) 54.2%, rgba(64,198,238,1) 55.2%, rgba(177,36,224,1) 98.4% );
    font-weight: 700;
    cursor: pointer;
    margin-inline: 10px;

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

    a{
        color: white;
        font-size: 22px;
        text-align: center;
        text-decoration: none;
        width: 100%;

        @media (max-width: 650px) {
        font-size: 20px;
}
@media (max-width: 580px) {
        font-size: 15px;
}
    }
}
`;