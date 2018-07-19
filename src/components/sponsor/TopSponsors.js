import React, { Component } from "react";
import Sponsor from './Sponsor'
import { v4 } from 'uuid'

class TopSponsors extends React.Component {

    render() {
        let sponsors = this.props.sponsors;

        return (
            <div className="container-outer container-outer-partners">
                <div className="container">

                    <h3><span>Partneři a sponzoři</span></h3>

                    <div className="row">
                        {sponsors.map(({ node }) => {
                            return (
                                <Sponsor key={v4()} sponsor={node}/>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default TopSponsors