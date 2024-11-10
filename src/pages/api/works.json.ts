import type { APIRoute } from 'astro';
import fetchGql from '@features/wp/api/fetchGql';

const GET: APIRoute = async () => {
  const query = `
    query AllWorks {
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
                termTaxonomyId
                name
              }
              ... on Work_area_category {
                termTaxonomyId
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
    }
  `;

  try {
    const response = await fetchGql(query);
    const { data } = await response.json();
    const works = data.works.nodes;
    return new Response(JSON.stringify({ works }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error('Error fetching works:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};

export { GET };
