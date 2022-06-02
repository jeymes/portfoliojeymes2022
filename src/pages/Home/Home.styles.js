import styled from "styled-components";

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100vh;
color: white;
background-image: radial-gradient( circle 610px at 5.2% 51.6%,  rgba(5,8,114,1) 0%, rgba(7,3,53,1) 97.5% );

`;

export const SubContainer = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
width: 100%;
/* border: 1px solid red; */

@media (max-width:840px) {
    flex-direction:column-reverse;
    height: 100%;
    }

`;

export const Descripion = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction:column;
/* border: 1px solid red; */
`;

export const SubDescripion = styled.div`
display: flex;
width: 100%;
flex-direction:column;
/* border: 1px solid red; */


h1{
    font-size: 45px;
    text-align: left;
    border-right: 2px solid white;
    white-space: nowrap;
    overflow: hidden;

    @media (max-width:1000px) {
        font-size: 40px;
    }

    @media (max-width:940px) {
        font-size: 35px;
    }
    @media (max-width:840px) {
        font-size: 30px;
    }
    @media (max-width:420px) {
        font-size: 22px;
    }
    
}

@keyframes typing {
    from{
        width: 0;
    }
    to{
        width: 37rem;
    }
}

@media (max-width:1000px) {

    @keyframes typing {
    from{
        width: 0;
    }
    to{
        width: 33rem;
    }
}
    }

    @media (max-width:940px) {
    
    @keyframes typing {
    from{
        width: 0;
    }
    to{
        width: 29rem;
    }
}
    }
    @media (max-width:840px) {
    
    @keyframes typing {
    from{
        width: 0;
    }
    to{
        width: 25rem;
    }
}
    }
    @media (max-width:420px) {
    
    @keyframes typing {
    from{
        width: 0;
    }
    to{
        width: 18rem;
    }
}
    }



.line {
        animation: Cursor 900ms steps(10) infinite normal,
         typing 5s steps(100) 1s normal both;
    }

    @keyframes Cursor {
        from{
            border-right-color: white;
        }
        to{
            border-right-color: transparent;
        }
    }
h2{
    font-size: 40px;
   text-align: left;

    @media (max-width:1000px) {
        font-size: 35px;
    }
    @media (max-width:940px) {
        font-size: 30px;
    }
    @media (max-width:840px) {
        font-size: 30px;
    }
    @media (max-width:420px) {
        font-size: 22px;
    }
    
}
`;

export const ContainerImg = styled.div`
display: flex;
justify-content: center;
align-items: center;
img{
    width: 350px;
    border-radius: 50%;

    @media (max-width:1000px) {
        width: 300px;
    }
    @media (max-width:940px) {
        width: 250px;
    }
    @media (max-width:840px) {
        width: 200px;
    }
    @media (max-width:420px) {
        width: 150px;
    }
}
`;