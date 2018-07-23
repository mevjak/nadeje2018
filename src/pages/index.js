import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import {Carousel, Table} from 'react-bootstrap'
import {withPrefix} from 'gatsby-link'
import { v4 } from 'uuid'

import Article from '../components/article/Article'

class IndexPage extends React.Component {
    render() {
        const siteTitle = this.props.data.site.siteMetadata.title;
        const posts = this.props.data.allMarkdownRemark.edges;
        const history = this.props.data.allHistoryJson.edges;

        return (
            <div>
                <Helmet title={siteTitle}/>

                <blockquote className="motto">
                    <p>Kdo nedělá nic pro druhé, nedělá nic pro sebe.</p>
                    <footer>Johann Wolfgang von Goethe</footer>
                </blockquote>

                <Carousel>
                    <Carousel.Item>
                        <img src={withPrefix('/images/banner-beh-nadeje.jpg')}/>
                        <Carousel.Caption>
                            <h1>Běh naděje</h1>
                            <p className="subtitle">Sportovně humanitární akce inspirovaná <strong>Během TERRYHO
                                FOXE</strong>.</p>
                            <p><Link className="button" to={'/akce/beh-nadeje'} role="button">Pojďte s námi proti
                                rakovině!</Link></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={withPrefix('/images/banner-skrabalek.jpg')}/>
                        <Carousel.Caption>
                            <h1>Memoriál Petra Škrabálka</h1>
                            <p className="subtitle">Tradiční závod v přespolním běhu, který se pořádá již <strong>od
                                roku 1973</strong>.</p>
                            <p><Link className="button" to={'/akce/memorial-petra-skrabalka'} role="button">Pojďte s
                                námi proti rakovině!</Link></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

                <div className="row">
                    <div className="col-md-9">
                        <h3>Aktuální články</h3>

                        {posts.map(({node}) => {
                            return (
                                <Article key={node.fields.slug} article={node}/>
                            )
                        })}

                    </div>

                    <div className="col-md-3">

                        <div className="banner">
                            <h4><span className="glyphicon glyphicon-calendar" aria-hidden="true"/>&nbsp; Běh naděje 2018</h4>
                            <p className="lead">8. září, 10:00</p>
                        </div>

                        <h4 className="banner-heading">Historie běhů v Jiřetíně</h4>
                        <div className="well">
                            <Table condensed striped>
                                <thead>
                                <tr>
                                    <th>Rok</th>
                                    <th>Účastníků</th>
                                    <th style={{textAlign: 'right'}}>Výtěžek Kč</th>
                                </tr>
                                </thead>
                                <tbody>
                                {history.map(({node}) => {
                                    return (
                                        <tr key={v4()}>
                                            <td>{node.eventYear}</td>
                                            <td style={{textAlign: 'center'}}>{node.participantCount}</td>
                                            <td style={{textAlign: 'right'}}>{node.moneyRaised}</td>
                                        </tr>
                                    )
                                })}
                                </tbody>
                            </Table>
                        </div>

                    </div>
                </div>

                <div className="row">
                    <div className="col-md-8">
                        <nav className="articles-nav">
                            <ul className="pager">
                                <li className="previous">
                                    <Link to={'/clanky/'}>Všechny články <span aria-hidden="true">&rarr;</span></Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

            </div>
        )
    }
}

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD.MM.YYYY")
            title
            author
            description
          }
        }
      }
    }
    allHistoryJson {
      edges {
        node {
          eventYear
          participantCount
          moneyRaised
        } 
      }
    }
  }
`;
