import React from "react";
import * as J from './ProjetoMain.styles';

export default function ProjetosMain(props) {

    const { ImgProjeto } = props

    return (

        <div>
            <J.ContainerProjeto>

                <J.TitleProjeto>

                    <h3>{props.NomeProjeto}</h3>

                </J.TitleProjeto>

                <J.SubProjeto>

                    <img src={ImgProjeto} />

                    <J.ContainerTech>
                        <>{props.Tech}</>
                        <div className="butoes">
                            <>{props.Site}</>
                            <>{props.Github}</>
                        </div>

                    </J.ContainerTech>

                </J.SubProjeto>


            </J.ContainerProjeto>
        </div>

    )
}