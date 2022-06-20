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

                    Github={<Links
                        TitleGit="Github"
                        Github="https://github.com/jeymes/portfoliojeymes2022"
                        TitleSite="Site"
                        Site="https://portfoliojeymes.herokuapp.com/home"
                    />}

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
                    />}
                    Github={<Links
                        TitleGit="Github"
                        Github="https://github.com/Escanor-7/Store-Cell"
                        TitleSite="Site"
                        Site="https://portfoliojeymes.herokuapp.com/home"
                    />}
                />

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
                    />}

                    Github={<Links
                        TitleGit="Github"
                        Github="https://github.com/jeymes/Calculadora"
                        TitleSite="Site"
                        Site="https://jcalculadora.herokuapp.com/"
                    />}
                />

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
                    />}

                    Github={<Links
                        TitleGit="Github"
                        Github="https://github.com/jeymes/MapGrid"
                        TitleSite="Site"
                        Site="https://jmapgrid.herokuapp.com/"
                    />}
                />

                <ProjetosMain

                    NomeProjeto='QrIdeia'
                    ImgProjeto="./img/QrIdeia.png" alt="QrIdeia"

                    Tech={<Tecnologias
                        Title="Tecnologias"
                        TecHtml="Html"
                        TecCss="Css"
                    />}

                    Github={<Links
                        TitleGit="Github"
                        Github="https://github.com/jeymes/TesteIdeia2001"
                        TitleSite="Site"
                        Site="https://portfoliojeymes.herokuapp.com/home"
                    />}
                />

            </J.SubContainer>


        </J.Container>
    )
}