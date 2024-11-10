import fetchGql from '@features/wp/api/fetchGql';

export async function getContentNodeByURI(uri: string = '') {
  const response = await fetchGql(
    `query PostQuery($uri: String!) {
        nodeByUri(uri: $uri) {
          ... on ContentNode {
            databaseId
            blocks
            seo {
              metaDesc
              title
            }
          }
          ... on Post {
            prevPost {
              title
              uri
            }
            nextPost {
              title
              uri
            }
            categories(first: 10) {
              nodes {
                name
                slug
              }
            }
            acfTest {
              fieldGroupName
              postText
              postImage {
                node {
                  mediaItemId
                  mediaItemUrl
                  srcSet(size: LARGE)
                  altText
                }
              }
              postGallery(first: 20) {
                nodes {
                  mediaItemId
                  mediaItemUrl
                  srcSet
                  altText
                }
              }
              postLink {
                target
                title
                url
              }
            }
          }
        }
      }`,
    { uri: uri }
  );

  const { data } = await response.json();

  return data;
}
