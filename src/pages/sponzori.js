import React, { Component } from "react";
import Sponsor from '../components/sponsor/Sponsor'
import { v4 } from 'uuid'

class SponsorsPage extends React.Component {

    render() {
        const sponsors = this.props.data.allSponsorsJson.edges;

        return (
            <div>
                <h1><span>Partneři a sponzoři</span></h1>

                <h2 className="centered">Firmy a podnikatelé</h2>
                <div className="row">
                    {sponsors.map(({ node }) => {
                        return (
                            <Sponsor key={v4()} sponsor={node}/>
                        )
                    })}
                </div>

                <br/><br/>

                <h2 className="centered">Dobří lidé</h2>
                <p className="text-center">
                    <i>
                        manželé Svobodovi, pan Bubník, Jiří Chlum, Lenka Vurmová, manželé
                        Fikarovi, Miroslav Evják, Věra Engeová, Vladimír Enge, Ladislava
                        Štěpánková, paní Zelenková, manželé Tomášovi, Stanislav Sluka,
                        Simona Veverková, Jiří Zeman, manželé Hrunkovi, Petr Jelínek.
                    </i>
                </p>

            </div>
        )
    }
}

export default SponsorsPage

export const sponsorQuery = graphql`
    query SponsorsQuery {
        allSponsorsJson {
            edges {
                node {
                    id,
                    name,
                    web,
                    image
                } 
            }
        }
    }
`;