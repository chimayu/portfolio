module.exports = {
    publicPath : process.env.NODE_ENV === 'production'
        ? '/portfolio2/'
        : '//',
    outputDir: 'docs'
}