exports.createPages = async ({ graphql, actions }) => {
    const { createRedirect } = actions

    createRedirect({
        fromPath: `/rsvp_camp`,
        toPath: `https://d9cz8f9nzru.typeform.com/to/ZlSu9k3G`,
    })

    createRedirect({
        fromPath: `/rsvp_camp_plus_one`,
        toPath: `https://d9cz8f9nzru.typeform.com/to/LK7aqUZv`,
    })

    createRedirect({
        fromPath: `/rsvp`,
        toPath: `https://d9cz8f9nzru.typeform.com/to/vth5GJHQ`,
    })

    createRedirect({
        fromPath: `/rsvp_plus_one`,
        toPath: `https://d9cz8f9nzru.typeform.com/to/Kt3IVVHB`,
    })

    createRedirect({
        fromPath: `/rsvp_family`,
        toPath: `https://d9cz8f9nzru.typeform.com/to/oedVdRTw`,
    })


}