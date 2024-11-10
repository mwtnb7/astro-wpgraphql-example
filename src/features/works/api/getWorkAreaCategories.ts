import fetchGql from '../../wp/api/fetchGql';

export async function getWorkAreaCategories() {
  try {
    const response = await fetchGql(
      `query getWorkAreaCategories {
      workAreaCategories(first: 100) {
        nodes {
            termTaxonomyId
            name
            slug
        }
      }
    }`
    );

    if (!response) {
      console.error('No response or no data received');
      return [];
    }

    const { data } = await response.json();

    return data.workAreaCategories.nodes;
  } catch (error) {
    console.error('Failed to fetch work categories:', error);
    return [];
  }
}
