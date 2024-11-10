import fetchGql from '@features/wp/api/fetchGql';

export async function getArchiveMonthsPaths() {
  const response = await fetchGql(`query getArchiveMonths {
    postArchiveMonths
  }`);

  const { data } = await response.json();

  return data.postArchiveMonths;
}
