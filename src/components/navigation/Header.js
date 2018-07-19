import React from 'react'
import Link from 'gatsby-link'
import { Navbar } from 'react-bootstrap'

import Links from './Links'

class Header extends React.Component {
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link className="navbar-brand" to={'/'}>Naděje 2011</Link>
                    </Navbar.Brand>
                </Navbar.Header>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Links dir={'right'}/>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Header