import React from 'react'
import Helmet from 'react-helmet'

import './assets/styles/main.less'
import Header from "../components/navigation/Header"
import Footer from "../components/navigation/Footer"
import TopSponsors from "../components/sponsor/TopSponsors"

export default class Template extends React.Component {

  render() {
    const { children } = this.props;
    const sponsors = this.props.data.allSponsorsJson.edges;

    return (
        <div>
            <Helmet>
                <title>Naděje 2011</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>
                <link rel="canonical" href="https://www.nadeje2011.cz" />
            </Helmet>

            <div className="container-outer container-outer-nav">
                <Header/>
            </div>
            <div className="container-outer">
                <div className="container container-content">
                    {children()}
                </div>
            </div>
            <TopSponsors sponsors={sponsors}/>
            <div className="container-outer container-outer-footer">
                <Footer/>
            </div>
        </div>
    )
  }
}

export const topSponsorQuery = graphql`
    query TopSponsorsQuery {
        allSponsorsJson(limit: 6) {
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