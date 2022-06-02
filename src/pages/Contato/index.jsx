import React from "react";
import * as J from './Contato.styles'

export default function Contato() {
    return (
        <J.Container>

            <J.Title>
                <h1>
                    Contato
                </h1>
            </J.Title>

            <J.SubContainer>

                <J.ContainerContato>
                    <span>
                        <a href="https://api.whatsapp.com/send?phone=5511970754259&text=Ol%C3%A1%2C%20Tudo%20bem%20Jemerson%3F">Whatsapp</a>
                    </span>

                    <span>
                        <a href="https://www.linkedin.com/in/jemerson-sousa-0a595019a/">Linkedin</a>
                    </span>

                    <span>
                        <a href="mailto:jsvpn2017@gmail.com">Gmail</a>
                    </span>

                    <span>
                        <a href="https://github.com/jeymes">Github</a>
                    </span>

                </J.ContainerContato>

                <J.Containerimg>
                    <img src="https://www.fagrontech.com.br/storage/app/media/contato/contato.png" alt="contato"></img>
                </J.Containerimg>

            </J.SubContainer>

        </J.Container>
    )
}