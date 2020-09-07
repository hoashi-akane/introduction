import githubToken from './token'

/*
 GitHub GraphQL API Document https://docs.github.com/en/graphql/reference/queries
 GitHub GraphQL Code TestPage https://developer.github.com/v4/explorer/ 
*/

export function getProductList(){

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

      fetch('https://api.github.com/graphql', {
          method: 'POST',
          headers: {
              'Content-Type' : 'application/json',
              'Accept': 'application/json',
              'Authorization' : githubToken
          },
          body: JSON.stringify({
              query,
              variables: { first, ownerAffiliations, privacy },
          })
      })
      .then(r => r.json())
      .then(data => console.log('data returned:', data));
    return(data);
}