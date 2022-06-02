import React from 'react'
import * as J from './About.styles'

export default function QuemSou() {
    return (
        <div>

            <J.Container>

                <J.ContainerTitle>
                    <h1>
                        Quem Sou?
                    </h1>
                </J.ContainerTitle>

                <J.SubContainer>

                    <J.ContainerDescription>

                        <div>
                            <p>
                                Estudante de análise de desenvolvimento de sistemas atualmente no 2.º período. Desde que me conheço como gente amo e admiro tecnologia,
                                tudo o que podemos desenvolver, e como ela ajuda e nos beneficia em vários âmbitos da nossa vida em geral para o mundo todo, é uma ferramenta
                                muito poderosa. A minha primeira curiosidade sobre T.I foi tenta descobrir como e feito os, app, sites e paginas da internet quando comecei a
                                pesquisa sobre, logo comecei-me apaixonar por tecnologia quando comecei a fazer as minhas primeiras paginas eu logo fiquei muito impressionado
                                como uma tela branca se transforma em algo incrível e surpreendente. Sendo assim, decidir foca o meu tempo e as minhas folgas para aprender cada dia,
                                mas sobre desenvolvimento web, todos os dias foco para desenvolver ferramentas de qualidade que venha somar no dia-a-dia.
                            </p>
                        </div>
                    </J.ContainerDescription>

                    <J.ContainerImg>
                        <img src='./img/pngegg.png' alt='' />
                    </J.ContainerImg>
                    
                </J.SubContainer>

            </J.Container>
        </div>
    )
}