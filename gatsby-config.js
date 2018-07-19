module.exports = {
    siteMetadata: {
        title: 'Naděje 2011',
        author: 'Miroslav Evják',
        description: 'Oficiální stránky občanského sdružení Naděje 2011',
        siteUrl: 'https://www.nadeje2011.cz',
    },
    pathPrefix: '/nadeje2011',
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/pages`,
                name: 'pages',
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 590,
                        },
                    },
                    {
                        resolve: `gatsby-remark-responsive-iframe`,
                        options: {
                            wrapperStyle: `margin-bottom: 1.0725rem`,
                        },
                    },
                    'gatsby-remark-prismjs',
                    'gatsby-remark-copy-linked-files',
                    'gatsby-remark-smartypants',
                ],
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                //trackingId: `ADD YOUR TRACKING ID HERE`,
            },
        },
        `gatsby-transformer-json`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/data/`,
            },
        },
        `gatsby-plugin-less`,
        `gatsby-plugin-feed`,
        `gatsby-plugin-offline`,
        `gatsby-plugin-react-helmet`,
        'gatsby-plugin-netlify', // make sure to keep it last in the array
    ],
};
