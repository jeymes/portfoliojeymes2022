import React, { useState } from "react";
import * as J from './Tecnologias.styles'


export default function Tecnologias(props) {

    const [isActive, setIsActive] = useState(false)

    return (
        <J.Tecnologias>

            <div onClick={(e) => setIsActive(!isActive)} className="tech">
                <button>{props.Title}</button>
            </div>

            {isActive && (

                <div className="desc">

                    <span className="Html">
                        {props.TecHtml}
                    </span>

                    <span className="Css">
                        {props.TecCss}
                    </span>

                    <span className="JavaScript">
                        {props.TecJavaScript}
                    </span>

                    <span className="React">
                        {props.TecReact}
                    </span>

                    <span className="Styled">
                        {props.TecStyled}
                    </span>

                    
                </div>
            )}

        </J.Tecnologias>
    )
}