import React, {Component} from "react";
import Link from 'gatsby-link'
import {withPrefix} from "gatsby-link/index";

class MemorialPage extends React.Component {
    render() {
        return (
            <div>
                <h1><span>Memoriál Petra Škrabálka</span></h1>

                <div className="row">
                    <div className="col-md-9">
                        <div className="page-content">
                            <p className="featured-image">
                                <img src={withPrefix('/images/heading-skrabalek.jpg')}/>
                            </p>

                            <h2>Memoriál Petra Škrabálka</h2>
                            <p>Memoriál Petra Škrabálka je tradiční závod v přespolním běhu , který se pořádá v Jiřetíně
                                pod Bukovou již od roku 1973. Cílem akce je připomenutí významného občana obce Jiřetín
                                pod Bukovou – <strong>Mistra sportu Petra Škrabálka</strong>.</p>

                            <h3>Kdo byl Petr Škrabálek</h3>
                            <p>Petr Škrabálek se narodil 4.3.1932 manželům Emilii a Branislavovi v Jiřetíně pod Bukovou.
                                Brzy po absolvování průmyslové školy v Liberci nastoupil do tehdejší Tofy Albrechtice,
                                kterou díky svému otci dobře znal a měl ji velmi rád. Práci vedoucího péče o základní
                                fondy vykonával až do své předčasné smrti 17.7.1972. </p>

                            <p>Úspěchů dosáhl zvláště ve sportu a to v jízdě na saních, které se věnoval už v 50.
                                letech. Kromě předních umístění v domácích i zahraničních soutěžích patří k jeho
                                největšímu úspěchu bronzová medaile v jízdě na dvousedadlových saních na mistrovství
                                světa v roce 1962 v polské Krynici. Za dobrou reprezentaci mu byl v roce 1960 udělen
                                titul <strong>Mistr sportu</strong>.</p>

                            <h3>Historie a současnost závodu</h3>
                            <p>První ročník běžeckého závodu „Memoriál Petra Škrabálka“ se uskutečnil 4.5.1973 a běželo
                                se na vzdálenost 5000 metrů. Závod pořádá obec Jiřetín pod Bukovou, Občanské sdružení
                                Naděje 2011 se spolupodílí na propagaci a organizaci průběhu závodu.</p>

                            <h3>Kategorie</h3>

                            <table className="table table-condensed table-striped">
                                <thead>
                                <tr>
                                    <th>Název</th>
                                    <th>Trať</th>
                                    <th className="text-center">Věk</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Nejmenší chlapci</td>
                                    <td>60m</td>
                                    <td className="text-center">0 – 7</td>
                                </tr>
                                <tr>
                                    <td>Nejmenší děvčata</td>
                                    <td>60m</td>
                                    <td className="text-center">0 – 7</td>
                                </tr>
                                <tr>
                                    <td>Přípravka II chlapci</td>
                                    <td>300m</td>
                                    <td className="text-center">8 – 9</td>
                                </tr>
                                <tr>
                                    <td>Přípravka II dívky</td>
                                    <td>300m</td>
                                    <td className="text-center">8 – 9</td>
                                </tr>
                                <tr>
                                    <td>Přípravka I chlapci</td>
                                    <td>1300m</td>
                                    <td className="text-center">10 – 11</td>
                                </tr>
                                <tr>
                                    <td>Přípravka I dívky</td>
                                    <td>1300m</td>
                                    <td className="text-center">10 – 11</td>
                                </tr>
                                <tr>
                                    <td>Mladší žáci</td>
                                    <td>1300m</td>
                                    <td className="text-center">12 – 13</td>
                                </tr>
                                <tr>
                                    <td>Mladší žákyně</td>
                                    <td>1300m</td>
                                    <td className="text-center">12 – 13</td>
                                </tr>
                                <tr>
                                    <td>Starší žáci</td>
                                    <td>2500m</td>
                                    <td className="text-center">14 – 15</td>
                                </tr>
                                <tr>
                                    <td>Starší žákyně</td>
                                    <td>2500m</td>
                                    <td className="text-center">14 – 15</td>
                                </tr>
                                <tr>
                                    <td>Muži</td>
                                    <td>2x2500m</td>
                                    <td className="text-center">16 – 100</td>
                                </tr>
                                <tr>
                                    <td>Ženy</td>
                                    <td>2x2500m</td>
                                    <td className="text-center">16 – 100</td>
                                </tr>
                                </tbody>
                            </table>

                            <p>V případě, že se do kategorie přihlásí méně než 3 účastníci, budou sloučeni s nejbližší
                                vyšší kategorií.</p>

                            <h3>Podmínky, startovné, odměny</h3>
                            <ul>
                                <li>registrace účastníků je v den závodu v 8:30 – 9:55 před Kulturním domem v Jiřetíně
                                    pod Bukovou
                                </li>
                                <li>účastníci narození v roce 1999 a mladší mají startovné zdarma, ostatní účastníci
                                    platí 50,- Kč
                                </li>
                                <li>trať je vyznačena červenými fáborky, mapa se zákresem průběhu trasy bude k dispozici
                                    v prostoru startu závodu
                                </li>
                                <li>věcné odměny získávají první tři závodníci v každé kategorii</li>
                                <li>účastníci startují na vlastní nebezpečí</li>
                                <li>protesty účastníků přijímá pořadatel do 10 minut po ukončení jednotlivého běhu</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="list-group">
                            <Link to={'/akce/beh-nadeje/'} className="list-group-item link"> Běh naděje</Link>
                            <Link to={'/akce/memorial-petra-skrabalka/'} className="list-group-item current"> Memoriál Petra Škrabálka</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MemorialPage