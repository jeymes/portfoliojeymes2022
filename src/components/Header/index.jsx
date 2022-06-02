import React from 'react'
import * as J from './Header.styles.js'
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <J.Container>
            <Link to={'/home'} style={{ textDecoration: 'none' }}>
                <div>
                    <p>Home</p>
                </div>
            </Link>
            <Link to={'/about'} style={{ textDecoration: 'none' }}>
                <div>
                    <p>Quem Sou?</p>
                </div>
            </Link>

            <Link to={'/habilidades'} style={{ textDecoration: 'none' }}>
                <div>
                    <p>Habilidades</p>
                </div>
            </Link>

            <Link to={'/projetos'} style={{ textDecoration: 'none' }}>
                <div>
                    <p>Projetos</p>
                </div>
            </Link>

            <J.ContainerButton>

                <Link to={'/contato'} style={{ textDecoration: 'none' }}>
                    <button>Contato</button>
                </Link>
            </J.ContainerButton>
        </J.Container>
    )
}