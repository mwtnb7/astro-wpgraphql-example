import type { APIRoute } from 'astro';
import fetchGql from '@features/wp/api/fetchGql';

const GET: APIRoute = async () => {
  const query = `
    query getWorkAreaCategories {
      workAreaCategories(first: 100) {
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
    const terms = data.workAreaCategories.nodes;
    return new Response(JSON.stringify({ terms }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error('Error fetching work area categories:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};

export { GET };
