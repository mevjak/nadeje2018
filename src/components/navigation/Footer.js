import React from 'react'
import Link from 'gatsby-link'

import Links from './Links'

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <ul className="nav navbar-nav">
                    <Links dir={'left'}/>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                    <li><Link to={'https://www.facebook.com/nadeje2011'} className="social social-fb"
                           target="_blank">FB</Link></li>
                    <li><Link to={'https://twitter.com/nadeje_2011'} className="social social-tw"
                           target="_blank">TW</Link></li>
                    <li><Link to={'https://plus.google.com/+Nadeje2011CzTeam/about'} className="social social-gg"
                           target="_blank">G+</Link></li>
                </ul>
                <div className="clearfix" />
            </footer>
        )
    }
}

export default Footer