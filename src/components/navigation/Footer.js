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
                    <li>
                        <a href="https://www.facebook.com/nadeje2011" className="social social-fb" target="_blank">FB</a>
                    </li>
                    <li>
                        <a href="https://twitter.com/nadeje_2011" className="social social-tw" target="_blank">TW</a>
                    </li>
                </ul>
                <div className="clearfix" />
            </footer>
        )
    }
}

export default Footer