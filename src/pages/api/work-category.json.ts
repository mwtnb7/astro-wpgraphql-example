import type { APIRoute } from 'astro';
import fetchGql from '@features/wp/api/fetchGql';

const GET: APIRoute = async () => {
  const query = `
    query getWorkCategories {
      workCategories(first: 100) {
        nodes {
          termTaxonomyId
          name
          slug
        }
      }
    }
  `;

  try {
    const response = await fetchGql(query);
    const { data } = await response.json();
    const terms = data.workCategories.nodes;
    return new Response(JSON.stringify({ terms }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error('Error fetching work categories:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};

export { GET };
