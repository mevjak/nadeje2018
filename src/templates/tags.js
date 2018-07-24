import React from 'react'
import Link from 'gatsby-link'

import Article from '../components/article/Article'
import Tags from '../components/tags/Tags'

class TagRoute extends React.Component {
    render() {

        const tag = this.props.pathContext.tag;
        const totalCount = this.props.data.allPosts.totalCount;

        const tags = this.props.data.allTags.group;

        const posts = this.props.data.allPosts.edges;
        const articles = posts.map(post => (
            <Article key={post.node.fields.slug} article={post.node}/>
        ));


        return (
            <div>
                <h1><span>Články se štítkem "{tag}" ({totalCount})</span></h1>

                <div className="row">
                    <div className="col-md-9">
                        {articles}
                    </div>
                    <div className="col-md-3">
                        <Tags tags={tags}/>
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

export default TagRoute

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allPosts: allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD.MM.YYYY")
            author
            description
            featuredImage {
                childImageSharp{
                    sizes(maxWidth: 900, maxHeight: 150) {
                        ...GatsbyImageSharpSizes
                    }
                }
            }
          }
        }
      }
    }
    allTags: allMarkdownRemark(
      limit: 1000
    ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
