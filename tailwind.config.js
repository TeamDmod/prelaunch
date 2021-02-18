module.exports = {
    purge: [
        "./components/**/*.{vue,js}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}"
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        container: {
            center: true,
        },
        extend: {
            fontFamily: {
                roboto: "Roboto, Medium"
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
};