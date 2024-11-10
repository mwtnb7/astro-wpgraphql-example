import fetchGql from '@features/wp/api/fetchGql';

export async function getAllPosts() {
  try {
    const response = await fetchGql(`query GetAllPosts {
      works(first: 1000) {
        nodes {
          databaseId
          date
          uri
          slug
          title
          terms {
            nodes {
              ... on Work_category {
                name
              }
              ... on Work_area_category {
                name
              }
            }
          }
          featuredImage {
            node {
              srcSet
              sourceUrl
              altText
              mediaDetails {
                height
                width
              }
            }
          }
        }
      }
    }`);

    if (!response) {
      console.error('No response received from fetchGql');
      return [];
    }

    const { data } = await response.json();

    if (!data || !data.works) {
      console.error('No data or no works data received');
      return [];
    }

    return data.works.nodes;
  } catch (error) {
    console.error('Failed to fetch all posts:', error);
    return [];
  }
}
