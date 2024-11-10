interface GraphQLVariables {
  [key: string]: any;
}

async function fetchGql(query: string = '', variables: GraphQLVariables = {}): Promise<Response> {
  if (!query) {
    throw new Error('No query provided');
  }

  const apiUrl = import.meta.env.WPGRAPHQL_URI;
  const refreshToken = import.meta.env.WPGRAPHQL_REFRESH_TOKEN;

  const requestOptions: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${refreshToken}`
    },
    body: JSON.stringify({ query, variables })
  };

  return fetch(apiUrl, requestOptions);
}

export default fetchGql;
