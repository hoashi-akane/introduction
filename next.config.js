const debug = process.env.NODE_ENV !== 'production'

module.exports = {
  assetPrefix: !debug ? '/introduction/' : '',
  
  env:{
    GITHUB_TOKEN:process.env.GITHUB_TOKEN
  }
}