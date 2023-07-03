exports.createPages = async ({ graphql, actions }) => {
    const { createRedirect } = actions

    createRedirect({
        fromPath: `/rsvp`,
        toPath: `https://d9cz8f9nzru.typeform.com/to/ZjBld0ay`,
    })
}