import React from "react";
import * as J from './Projetos.styles'
import Tecnologias from '../../components/Tecnologias/index'
import ProjetosMain from "../../components/ProjetoMain";
import Links from "../../components/Links";

export default function projetos() {
    return (
        <J.Container>

            <J.ContainerTitle>
                <h1>
                    Projetos
                </h1>
            </J.ContainerTitle>



            <J.SubContainer>

                <ProjetosMain

                    NomeProjeto='Portifolio'
                    ImgProjeto="./img/portfolio.png" alt="Portfólio"

                    Tech={<Tecnologias
                        Title="Tecnologias"
                        TecHtml="Html"
                        TecReact="React.Js"
                        TecStyled="Styled Components"
                        TecJavaScript="Java Script"
                        TecCss="Css"
                    />}
                    // Links={<Links
                    //     Title="Links"
                    // />} 
                    />

                <ProjetosMain

                    NomeProjeto='StoreCell'
                    ImgProjeto="./img/StoreCell.png" alt="StoreCell"

                    Tech={<Tecnologias
                        Title="Tecnologias"
                        TecHtml="Html"
                        TecReact="React.Js"
                        TecStyled="Styled Components"
                        TecJavaScript="Java Script"
                        TecCss="Css"
                    />} />

                <ProjetosMain

                    NomeProjeto='Calculadora'
                    ImgProjeto="./img/Calculadora.png" alt="Calculadora"

                    Tech={<Tecnologias
                        Title="Tecnologias"
                        TecHtml="Html"
                        TecReact="React.Js"
                        TecStyled="Styled Components"
                        TecJavaScript="Java Script"
                        TecCss="Css"
                    />} />

                <ProjetosMain

                    NomeProjeto='MapGrid'
                    ImgProjeto="./img/MapGrid.png" alt="MapGrid"

                    Tech={<Tecnologias
                        Title="Tecnologias"
                        TecHtml="Html"
                        TecReact="React.Js"
                        TecStyled="Styled Components"
                        TecJavaScript="Java Script"
                        TecCss="Css"
                    />} />

                <ProjetosMain

                    NomeProjeto='QrIdeia'
                    ImgProjeto="./img/QrIdeia.png" alt="QrIdeia"

                    Tech={<Tecnologias
                        Title="Tecnologias"
                        TecHtml="Html"
                        TecCss="Css"
                    />} />

            </J.SubContainer>


        </J.Container>
    )
}