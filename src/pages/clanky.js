import React from 'react'
import Helmet from 'react-helmet'

import Article from '../components/article/Article'
import Tags from '../components/tags/Tags'

class BlogPage extends React.Component {
    render() {
        const siteTitle = this.props.data.site.siteMetadata.title;
        const posts = this.props.data.allMarkdownRemark.edges;
        const tags = this.props.data.allMarkdownRemark.group;

        return (
            <div>
                <Helmet title={siteTitle} />

                <h1><span>Články</span></h1>

                <div className="row">
                    <div className="col-md-9">
                        {posts.map(({ node }) => {
                            return (
                                <Article key={node.fields.slug} article={node} />
                            )
                        })}
                    </div>
                    <div className="col-md-3">
                        <Tags tags={tags}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default BlogPage


export const blogQuery = graphql`
  query BlogQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt(pruneLength: 250)
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
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
