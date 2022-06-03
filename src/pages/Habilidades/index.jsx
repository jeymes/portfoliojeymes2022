import React from "react";
import * as J from "./Habilidades.Styles"

export default function Habilidades() {
    return (
        <J.Container>

            <J.Title>
                <h1>
                    Habilidades
                </h1>
            </J.Title>

            <J.SubContainer>

                <J.Habilidades>

                    <J.SubTitle>
                        <h2>Tecnologias</h2>
                    </J.SubTitle>

                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg" alt="html5" />

                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg" alt="css3" />

                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="javascript" />

                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="react" />

                    <img src="https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png" alt="styled-components" />

                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="bootstrap" />


                </J.Habilidades>

                <J.Ferramentas>

                    <J.SubTitle>
                        <h2>Ferramentas</h2>
                    </J.SubTitle>

                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="figma" />

                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="git" />

                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" alt="github" />

                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="vscode" />

                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original-wordmark.svg" alt="jira" />





                </J.Ferramentas>

            </J.SubContainer>

        </J.Container>
    )
}