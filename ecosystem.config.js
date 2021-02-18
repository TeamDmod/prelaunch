module.exports = {
    apps: [{
        name: 'dmod.gg',
        exec_mode: 'cluster',
        instances: 'max', // Or a number of instances
        script: './node_modules/nuxt/bin/nuxt.js',
        args: 'start'
    }]
}