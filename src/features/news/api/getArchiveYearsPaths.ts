import fetchGql from '@features/wp/api/fetchGql';

export async function getArchiveYearsPaths() {
  const response = await fetchGql(`query getArchiveYears {
    postArchiveYears
  }`);

  const { data } = await response.json();

  return data.postArchiveYears;
}
