import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
    siteMetadata: {
        title: `wedding`,
        siteUrl: `https://www.yourdomain.tld`
    },
    // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
    // If you use VSCode you can also use the GraphQL plugin
    // Learn more at: https://gatsby.dev/graphql-typegen
    graphqlTypegen: true,
    plugins: ["gatsby-plugin-styled-components", "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp",
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: "images",
                path: "./src/images/"
            },
            __key: "images"
        },
        {
            resolve: `gatsby-omni-font-loader`,
            options: {
                enableListener: true,
                preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
                web: [
                    {
                        name: `Open Sans`,
                        file: `https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap`,
                    },
                    {
                        name: `Cormorant Garamond`,
                        file: `https://fonts.googleapis.com/css2?family=Cormorant+Garamond`,
                    },
                ],
            },

        },
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                icon: 'src/images/ko.png',
            },
        },

    ]

};

export default config;


exports.onCreateWebpackConfig = ({ stage, loaders, actions }: { stage: string; loaders: any, actions: any }) => {
    if (stage === "build-html" || stage === "develop-html") {
        actions.setWebpackConfig({
            module: {
                rules: [
                    {
                        test: /bad-module/,
                        use: loaders.null(),
                    },
                ],
            },
        })
    }
}