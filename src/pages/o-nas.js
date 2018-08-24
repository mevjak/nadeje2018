import React, { Component } from "react";
import Profile from '../components/profile/Profile'
import { v4 } from 'uuid'

class AboutPage extends Component {
    render() {
        const profiles = this.props.data.allProfilesJson.edges;

        return (
            <div>
                <h1><span>O nás</span></h1>

                <div className="row">
                    <div className="col-md-12">
                        <blockquote className="about-us">
                            <p>
                                &ldquo;Rakovina se objevila i v naší rodině stejně jako v mnoha jiných. V té době se ještě
                                pořádaly běhy <strong>Terryho Foxe</strong>. Účast na nich pro mě byla vyjádřením přirozené
                                podpory lidí, kteří onemocněli. Když Běh Terryho Foxe zanikl, nahradil ho <strong>Běh naděje</strong>.
                                Postupně však v regionu ubývalo míst, kde se běhy pořádaly a to mě moc mrzelo.
                            </p>
                            <p>
                                Několik měsíců jsem si pohrávala s myšlenkou uspořádat <strong>Běh naděje</strong> a
                                zjišťovala potřebné informace. Pak jsem oslovila partu kamarádů, se kterými se
                                příležitostně scházíme, zda by do toho se mnou nešli. Velkým hnacím motorem byl Mirek Evják,
                                který sám aktivně běhá a snaží se k tomuto zdravému sportu motivovat své okolí.&rdquo;
                            </p>
                            <footer>
                                <cite title="Noviny Deník Jablonecka">Věra Engeová v Deníku Jablonecka 7. 9. 2013.</cite>
                            </footer>
                        </blockquote>
                    </div>
                </div>

                <div className="gallery">

                    <h2 className="centered">Náš tým</h2>

                    <div className="row">
                        {profiles.map(({ node }) => {
                            return (
                                <Profile key={v4()} profile={node}/>
                            )
                        })}
                    </div>

                    <h2 className="centered">Dobrovolníci</h2>

                    <p>Při organizaci našich akcí se neobejdeme bez obětavé pomoci našich kamarádů dobrovolníků:</p>

                    <p><i>Stanislav Valenta, Aleš Rydval, Eva Nicková, Jiří Chlum, Ladislava Štěpánková, Andy Engeová,
                        Andreas Rolli, Anežka Evjáková, Radka Houfková, Aranka Rosíková, Radka&nbsp;Kittelová, Šárka Petráňová,
                        Miroslav Evják ml., Jan Fikar ml., Jana Petráňová.</i></p>

                    <p><span className="glyphicon glyphicon-heart" aria-hidden="true"/></p>

                </div>
            </div>
        );
    }
}

export default AboutPage;

export const aboutQuery = graphql`
    query ProfilesQuery {
        allProfilesJson {
            edges {
                node {
                    id,
                    name,
                    description,
                    image
                } 
            }
        }
    }
`;