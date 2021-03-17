export default {
    server: {
        host: '0.0.0.0',
        port: 7788,
    },
    head: {
        title: "dmod.gg",
        htmlAttrs: {
            lang: "en"
        },
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            { hid: "description", name: "description", content: "Finding moderators or a server to work for has never been quicker! Create or apply for Applications. Even search by Rating, Time Zone, and more." }
            { property: 'og:title', content: 'dmod.gg', vmid: 'og:title' }
            { property: 'og:description', content: 'Finding moderators or a server to work for has never been quicker! Create or apply for Applications. Even search by Rating, Time Zone, and more.', vmid: 'og:description' }
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "/logo.png" }]
    },
    components: true,
    buildModules: ["@nuxtjs/tailwindcss"],
};
