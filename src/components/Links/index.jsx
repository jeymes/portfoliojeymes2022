import React from "react";
import * as J from './Links.styles'

export default function Links(props) {

    const { Github } = props
    const  { Site } = props


    return (

        <J.Container>
            <button
                type="submit">
                <a
                    href={Github}>
                    {props.TitleGit}
                </a>
                <a ></a>
            </button>
            <button
                type="submit">
                <a
                    href={Site}>
                    {props.TitleSite}
                </a>
            </button>

        </J.Container>
    )
}