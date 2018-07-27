import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

import ArticleMeta from '../components/article/ArticleMeta'

class BlogPostTemplate extends React.Component {
    render() {
        const post = this.props.data.markdownRemark;
        const siteTitle = this.props.data.site.siteMetadata.title;
        const {previous, next} = this.props.pathContext;

        return (
            <div>
                <Helmet title={`${post.frontmatter.title} | ${siteTitle}`}/>

                <h1><span>Články</span></h1>

                <article>
                    <div className="row">
                        <div className="col-md-10 col-md-offset-1">
                            <p className="featured-image">
                                <Img sizes={post.frontmatter.featuredImage.childImageSharp.sizes} />
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2">
                            <div className="page-content">
                                <h2>{post.frontmatter.title}</h2>

                                <ArticleMeta meta={{author: post.frontmatter.author, date: post.frontmatter.date}}/>

                                <div dangerouslySetInnerHTML={{__html: post.html}}/>

                            </div>
                        </div>
                    </div>
                </article>

                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
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

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "DD.MM.YYYY")
        title
        description
        tags
        author
            featuredImage {
                childImageSharp{
                    sizes(maxWidth: 900, maxHeight: 400) {
                        ...GatsbyImageSharpSizes
                    }
                }
            }
      }
    }
  }
`;
