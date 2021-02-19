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
            { hid: "description", name: "description", content: "" }
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "/logo.png" }]
    },
    components: true,
    buildModules: ["@nuxtjs/tailwindcss"],
};
