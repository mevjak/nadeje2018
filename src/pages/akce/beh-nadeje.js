import React, {Component} from "react";
import Link from 'gatsby-link'
import {withPrefix} from 'gatsby-link'

class NadejePage extends React.Component {
    render() {
        return (
            <div>
                <h1><span>Běh naděje</span></h1>

                <div className="row">
                    <div className="col-md-9">
                        <div className="page-content">
                            <p className="featured-image">
                                <img src={withPrefix('/images/heading-beh-nadeje.jpg')}/>
                            </p>
                            <h2>Běh naděje</h2>
                            <p><strong>Běh naděje</strong> je sportovně humanitární akce inspirující se <strong>Během
                                TERRYHO FOXE</strong>. Koná se jako série samostatných běhů, které pořádají
                                dobrovolníci v jednotlivých městech a obcích po celém území ČR.</p>

                            <h3>Cíle Běhu naděje</h3>
                            <dl className="dl-horizontal">
                                <dt>Motivační</dt>
                                <dd>Přimět účastníky udělat něco pro své zdraví a absolvovat předepsanou trať
                                </dd>
                                <dt>Finanční</dt>
                                <dd>Získat z příspěvků účastníků finanční prostředky na podporu výzkumu rakoviny
                                    a vyjádřit solidaritu s nemocnými
                                </dd>
                                <dt>Preventivní</dt>
                                <dd>Ukázat účastníkům, že pravidelným pohybem a správnou životosprávou lze
                                    udělat něco pro své zdraví a tím předcházet onkologickým i ostatním
                                    civilizačním onemocněním
                                </dd>
                            </dl>

                            <p><strong>Běh naděje</strong> v Jiřetíně pod Bukovou se stal tradiční akcí, kterou
                                podporují místní občané a podnikatelé nebo i návštěvníci z daleka, kteří mají
                                určitý vztah k problematice nádorové prevence a chtějí pomoci dobré věci.
                                Každoročně se schází více než 100 účastníků, kteří se aktivně zúčastní běhu a
                                přispějí v rámci veřejné sbírky. Výše částky získaná veřejnou sbírkou a
                                sponzorskými dary v předchozích ročnících předčila výsledky i některých velkých
                                měst. Finanční prostředky jsou použity na podporu onkologického výzkumu nebo na
                                konkrétní nákupy zdravotnických přístrojů a vědeckého vybavení.</p>

                            <p>Další informace o <strong>Běhu naděje</strong> najdete na oficiálních
                                stránkách <a href="https://www.erbia.cz/nadace/#nadeje" target="_blank">www.erbia.cz</a>.
                            </p>

                            <h3>Dárcovský příspěvek</h3>
                            <p>Jedním z cílů akce je veřejná sbírka. Vklad účastníka je dobrovolný a jeho výše
                                individuální, každý účastník dostane drobnou odměnu.</p>

                            <h3>Sponzorský příspěvek</h3>
                            <p>Příspěvky sponzorů budou využity k nákupu upomínkových předmětů pro účastníky a k
                                zajištění služeb nezbytných pro úspěšný průběh akce. Seznam všech dárců bude
                                uveden na propagačních materiálech, které se vztahují k této konkrétní akci.</p>

                            <p>Pokud usoudíte, že byste mohli přispět přiměřenou částkou z Vašich finančních
                                prostředků, laskavě poukažte Vámi určený obnos na
                                účet <strong>670100-2208920235/6210</strong> vedený u mBank. Pokud preferujete
                                uzavření sponzorské smlouvy nebo příspěvek ve formě hotovosti, laskavě nás  <Link to={'/kontakt/'}>kontaktujte</Link>,
                                abychom mohli dohodnout příslušné formality.</p>

                            <h3>Trasa běhu</h3>
                            <p>Start před Obecním úřadem v Jiřetíně pod Bukovou, dále kolem vily Schowanek po
                                Jiřetínské, kolem Stráže, kolem ranče Zelníčkových dále až na otočku pod kopcem
                                u hlavní silnice a zpět do Jiřetína pod Bukovou. Cíl je opět před Obecním úřadem
                                v Jiřetíně pod Bukovou (<a target="_blank" href={withPrefix('/images/mapa-trasy-beh-nadeje.gif')}>viz mapka</a>).

                                Délka tratě je cca 3,5 km a je možné ji absolvovat libovolným způsobem - chůzí,
                                během, joggingem, na invalidním vozíku, na kolečkových bruslích, s kočárkem, se
                                psem atd. - podle vlastních sil. </p>

                            <h3>Doprovodný program</h3>
                            <p>Po absolvování trasy budou v prostoru cíle připraveny zajímavé soutěže a hry pro
                                děti, bude k dispozici občerstvení, kulturní program a také bude možno zakoupit
                                další upomínkové předměty (trička, čepice). Po dobu akce bude veřejnosti
                                otevřena vila Schowanek, která nabízí prohlídku zajímavých interiérů a expozic
                                (viz <a href="http://www.vila-schowanek.cz" target="_blank">www.vila-schowanek.cz</a>).</p>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="list-group">
                            <Link to={'/akce/beh-nadeje/'} className="list-group-item current"> Běh naděje</Link>
                            <Link to={'/akce/memorial-petra-skrabalka/'} className="list-group-item link"> Memoriál Petra Škrabálka</Link>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default NadejePage
