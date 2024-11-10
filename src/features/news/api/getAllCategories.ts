import fetchGql from '@features/wp/api/fetchGql';

export async function getAllCategories() {
  const response = await fetchGql(`query getCategories {
    categories {
      nodes {
        name
        slug
      }
    }
  }`);

  const { data } = await response.json();

  return data.categories.nodes;
}
