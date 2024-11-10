import fetchGql from '@features/wp/api/fetchGql';

export async function getAllPosts() {
  const response = await fetchGql(`query GetAllUris {
      posts(first: 2000) {
        nodes {
          databaseId
          date
          uri
          slug
          title
          categories {
            nodes {
              name
              slug
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

  const { data } = await response.json();

  return data.posts.nodes;
}
