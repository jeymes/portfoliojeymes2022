import React from "react";
import Button from "../../components/Button/index.jsx";
import * as J from './Home.styles.js'


export default function Home() {
    return (
        <J.Container>

            <J.SubContainer>

                <J.Descripion>

                    <J.SubDescripion>

                        <h2 className="lineHi">Hello i'm </h2>
                        
                        <h1 className="line">Jemerson de Sousa Pinheiro </h1>

                    </J.SubDescripion>

                    <div>
                        <Button />
                    </div>

                </J.Descripion>

                <J.ContainerImg>
                    <img src="./img/jeymes.jpeg" alt="jeymes" />
                </J.ContainerImg>

            </J.SubContainer>
        </J.Container>
    )
}