const debug = process.env.NODE_ENV !== 'production'

module.exports = {
  assetPrefix: !debug ? '/introduction/' : '',
  
  env:{
    REPO_TOKEN:process.env.REPO_TOKEN
  }
}