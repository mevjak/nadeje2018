import React from 'react'
import Link from 'gatsby-link'
import { kebabCase } from 'lodash'

class Tags extends React.Component {
    render() {
        const tags = this.props.tags;

        return (
            <div className="articles-sidebar">
                <h4>Štítky</h4>
                <div className="list-group">
                    {tags.map(tag => (
                        <Link to={`/tags/${kebabCase(tag.fieldValue)}/`} key={tag.fieldValue} className="list-group-item">
                            <span className="glyphicon glyphicon-tag" aria-hidden="true"/>
                            <span className="badge">{tag.totalCount}</span> {tag.fieldValue}
                        </Link>
                    ))}
                </div>
            </div>
        )
    }
}

export default Tags