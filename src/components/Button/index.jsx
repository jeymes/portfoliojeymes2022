import React from "react";
import * as J from "./Button.styles.js"
import { Link } from "react-router-dom";

export default function Button() {
    return (
        <J.Container>
            <J.Description>
                <p>Desenvolverdor Developer/Html/Css/JavaScript/React.js/</p>
            </J.Description>

            <J.ContainerButton>

                <Link to={'/contato'} style={{ textDecoration: 'none' }}>

                    <J.ButtonContato>Contato</J.ButtonContato>

                </Link>


                <Link to={'/about'} style={{ textDecoration: 'none' }}>
                    <J.ButtonQuemSou>Quem sou?</J.ButtonQuemSou>
                </Link>

            </J.ContainerButton>

        </J.Container>
    )
}