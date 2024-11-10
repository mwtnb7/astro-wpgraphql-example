import fetchGql from './fetchGql';

interface ContentNode {
  databaseId: number;
  blocks: string;
  seo: {
    metaDesc: string;
    title: string;
  };
}

interface NodeByUriResponse {
  nodeByUri: ContentNode | null;
}

async function getContentNodeByURI(uri: string = ''): Promise<ContentNode | null> {
  const query = `
    query PostQuery($uri: String!) {
      nodeByUri(uri: $uri) {
        ... on ContentNode {
          databaseId
          blocks
          seo {
            metaDesc
            title
          }
        }
      }
    }
  `;

  const variables = { uri };

  try {
    const response = await fetchGql(query, variables);
    const { data } = await response.json();
    return data.nodeByUri;
  } catch (error) {
    console.error('Error fetching content node:', error);
    return null;
  }
}

export default getContentNodeByURI;
