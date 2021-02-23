/*
 GitHub GraphQL API Document https://docs.github.com/en/graphql/reference/queries
 GitHub GraphQL Code TestPage https://developer.github.com/v4/explorer/ 
*/

/*
  fetchはawaitで返り値を待つ。
*/
export async function getProductList(){

  let allProductData = null;
  const first = 10
  const ownerAffiliations = ['OWNER']
  const privacy = "PUBLIC"
  const query = 'query($first: Int!, $ownerAffiliations: [RepositoryAffiliation]!, $privacy: RepositoryPrivacy!){ \
      viewer { \
        repositories(first: $first, ownerAffiliations: $ownerAffiliations, privacy: $privacy){ \
          edges { \
            node { \
              name \
              description \
                url \
            } \
          } \
        } \
      } \
    }'

  await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
          'Content-Type' : 'application/json',
          'Accept': 'application/json',
          'Authorization' : 'token '+ process.env.GITHUB_TOKEN
      },
      body: JSON.stringify({
          query,
          variables: { first, ownerAffiliations, privacy },
      })
  })
  .then(r => r.json())
  .then(data => {
    data = data['data']['viewer']['repositories']['edges']
// 説明文の値が空のデータを除外
    allProductData = (data.filter(product => product['node']['description']))
  })
  return allProductData
}