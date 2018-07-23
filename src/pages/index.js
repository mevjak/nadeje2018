import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import {Table} from 'react-bootstrap'
import { v4 } from 'uuid'

import Article from '../components/article/Article'
import MyCarousel from '../components/carousel/MyCarousel'

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

                <MyCarousel/>

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

                        <h4 className="banner-heading">Historie běhů v Jiřetíně p.B.</h4>
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
    allMarkdownRemark(
        limit: 5
        sort: { fields: [frontmatter___date], order: DESC }
    ) {
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
