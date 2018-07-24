import React from 'react'
import Link from 'gatsby-link'
import {Carousel} from 'react-bootstrap'

import bannerNadeje from './images/banner-beh-nadeje.jpg'
import bannerSkrabalek from './images/banner-skrabalek.jpg'

class MyCarousel extends React.Component {
    render() {

        return (
            <Carousel>
                <Carousel.Item>
                    <img src={bannerNadeje}/>
                    <Carousel.Caption>
                        <h1>Běh naděje</h1>
                        <p className="subtitle">Sportovně humanitární akce inspirovaná <strong>Během TERRYHO
                            FOXE</strong>.</p>
                        <p><Link className="button" to={'/akce/beh-nadeje'} role="button">Pojďte s námi proti
                            rakovině!</Link></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={bannerSkrabalek}/>
                    <Carousel.Caption>
                        <h1>Memoriál Petra Škrabálka</h1>
                        <p className="subtitle">Tradiční závod v přespolním běhu, který se pořádá již <strong>od
                            roku 1973</strong>.</p>
                        <p><Link className="button" to={'/akce/memorial-petra-skrabalka'} role="button">Ukaž, že jsi
                            Mistr sportu!</Link></p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}

export default MyCarousel;