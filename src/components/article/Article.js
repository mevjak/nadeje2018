import React from 'react'
import Link from 'gatsby-link'
import { withPrefix } from 'gatsby-link'

import ArticleMeta from './ArticleMeta'

class Article extends React.Component {
    render() {
        const article = this.props.article;

        return (
            <article>
                <div className="featured-image">
                    <img src={article.frontmatter.image}/>
                </div>

                <Link to={article.fields.slug}><h2>{article.frontmatter.title}</h2></Link>

                <ArticleMeta meta={{author: article.frontmatter.author, date: article.frontmatter.date}}/>

                <p dangerouslySetInnerHTML={{ __html: article.excerpt }} />

                <p>
                    <Link to={article.fields.slug}>Celý článek <span aria-hidden="true">&rarr;</span></Link>
                </p>
            </article>
        )
    }
}

export default Article