import React from "react";
import * as J from './Projetos.styles'
import Tecnologias from '../../components/Tecnologias/index'

export default function projetos() {
    return (
        <J.Container>

            <J.ContainerTitle>
                <h1>
                    Projetos
                </h1>
            </J.ContainerTitle>

            <J.ContainerProjeto>

                <J.TitleProjeto>

                    <h3>Portfólio</h3>

                </J.TitleProjeto>

                <J.SubProjeto>

                    <img src="./img/portfolio.png" alt="Portfólio" />

                    <J.ContainerTech>

                        <Tecnologias
                            Title="Tecnologias"
                            TecHtml="Html"
                            TecReact="React.Js"
                            TecStyled="Styled Components"
                            TecJavaScript="Java Script"
                            TecCss="Css" />

                    </J.ContainerTech>

                </J.SubProjeto>


            </J.ContainerProjeto>

            <J.SubContainer>

                <J.ContainerProjeto>

                    <J.TitleProjeto>

                        <h3>StoreCell</h3>

                    </J.TitleProjeto>

                    <J.SubProjeto>

                        <img src="./img/StoreCell.png" alt="StoreCell" />

                        <J.ContainerTech>

                            <Tecnologias
                                Title="Tecnologias"
                                TecHtml="Html"
                                TecReact="React.Js"
                                TecStyled="Styled Components"
                                TecJavaScript="Java Script"
                                TecCss="Css" />

                        </J.ContainerTech>

                    </J.SubProjeto>


                </J.ContainerProjeto>

                <J.ContainerProjeto>

                    <J.TitleProjeto>

                        <h3>Calculadora</h3>

                    </J.TitleProjeto>

                    <J.SubProjeto>

                        <img src="./img/Calculadora.png" alt="Calculadora" />

                        <J.ContainerTech>

                            <J.ContainerTech>

                                <Tecnologias
                                    Title="Tecnologias"
                                    TecHtml="Html"
                                    TecReact="React.Js"
                                    TecStyled="Styled Components"
                                    TecJavaScript="Java Script"
                                    TecCss="Css" />

                            </J.ContainerTech>

                        </J.ContainerTech>

                    </J.SubProjeto>

                </J.ContainerProjeto>

                <J.ContainerProjeto>

                    <J.TitleProjeto>

                        <h3>MapGrid</h3>

                    </J.TitleProjeto>

                    <J.SubProjeto>

                        <img src="./img/MapGrid.png" alt="MapGrid" />

                        <J.ContainerTech>

                            <J.ContainerTech>

                                <Tecnologias
                                    Title="Tecnologias"
                                    TecHtml="Html"
                                    TecReact="React.Js"
                                    TecStyled="Styled Components"
                                    TecJavaScript="Java Script"
                                    TecCss="Css" />

                            </J.ContainerTech>

                        </J.ContainerTech>

                    </J.SubProjeto>

                </J.ContainerProjeto>

                <J.ContainerProjeto>

                    <J.TitleProjeto>

                        <h3>QRideia</h3>

                    </J.TitleProjeto>

                    <J.SubProjeto>

                        <img src="./img/QrIdeia.png" alt="QrIdeia" />

                        <J.ContainerTech>

                            <J.ContainerTech>

                                <Tecnologias
                                    Title="Tecnologias"
                                    TecHtml="Html"
                                    TecCss="Css" />
                            </J.ContainerTech>

                        </J.ContainerTech>
                    </J.SubProjeto>

                </J.ContainerProjeto>

            </J.SubContainer>


        </J.Container>
    )
}