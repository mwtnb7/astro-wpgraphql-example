import { useState, useEffect } from 'react';
import type { FormEvent, ChangeEvent } from 'react';
import PostItem from '@components/posts/PostItem';
import Container from '@components/layout/Container';
import type { Work } from '@features/works/types/work';
import type { Term } from '@features/works/types/term';

const WorksSearch = () => {
  const [works, setWorks] = useState<Work[]>([]);
  const [workCategories, setWorkCategories] = useState<any[]>([]);
  const [workAreaCategories, setWorkAreaCategories] = useState<any[]>([]);
  const [paramGenres, setParamGenres] = useState<string[]>([]);
  const [paramsAreas, setParamsAreas] = useState<string[]>([]);
  const [paramKeyword, setParamKeyword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const worksRes = await fetch('/api/works.json');
        const worksData = await worksRes.json();
        setWorks(worksData.works);

        const categoriesRes = await fetch('/api/work-category.json');
        const categoriesData = await categoriesRes.json();
        setWorkCategories(categoriesData.terms);

        const areaCategoriesRes = await fetch('/api/work-area-category.json');
        const areaCategoriesData = await areaCategoriesRes.json();
        setWorkAreaCategories(areaCategoriesData.terms);

        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleGenreChange = (event: ChangeEvent<HTMLInputElement>, id: string) => {
    const isChecked = event.target.checked;
    const newParamGenres = isChecked ? [...paramGenres, id] : paramGenres.filter((genre) => genre !== id);
    setParamGenres(newParamGenres);
  };

  const handleAreaChange = (event: ChangeEvent<HTMLInputElement>, id: string) => {
    const isChecked = event.target.checked;
    const newParamsAreas = isChecked ? [...paramsAreas, id] : paramsAreas.filter((area) => area !== id);
    setParamsAreas(newParamsAreas);
  };

  const handleKeywordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setParamKeyword(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  let filteredWorks = works
    .filter(
      (work) =>
        paramGenres.length === 0 ||
        work.terms.nodes.some((node: Term) => paramGenres.includes(node.termTaxonomyId.toString()))
    )
    .filter(
      (work) =>
        paramsAreas.length === 0 ||
        work.terms.nodes.some((node: Term) => paramsAreas.includes(node.termTaxonomyId.toString()))
    )
    .filter((work) => work.title.includes(paramKeyword));

  return (
    <div className="py-20 px-4">
      <Container size="sm">
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : (
          <>
            <form onSubmit={handleSubmit}>
              <div className="mb-10">
                <h2 className="mb-2">ジャンル</h2>
                <div className="flex flex-wrap gap-4">
                  {workCategories.map((term: any) => (
                    <label key={term.termTaxonomyId} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name="genres[]"
                        value={term.termTaxonomyId}
                        checked={paramGenres.includes(term.termTaxonomyId.toString())}
                        onChange={(e) => handleGenreChange(e, term.termTaxonomyId.toString())}
                        className="form-checkbox h-5 w-5 text-blue-600"
                      />
                      <span className="ml-2">{term.name}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="mb-10">
                <h2 className="mb-2">エリア</h2>
                <div className="flex flex-wrap gap-4">
                  {workAreaCategories.map((term: any) => (
                    <label key={term.termTaxonomyId} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name="areas[]"
                        value={term.termTaxonomyId}
                        checked={paramsAreas.includes(term.termTaxonomyId.toString())}
                        onChange={(e) => handleAreaChange(e, term.termTaxonomyId.toString())}
                        className="form-checkbox h-5 w-5 text-blue-600"
                      />
                      <span className="ml-2">{term.name}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="mb-10">
                <h2 className="mb-2">キーワード検索</h2>
                <input
                  type="text"
                  name="q"
                  value={`${paramKeyword || ''}`}
                  placeholder="キーワードを入力してください。"
                  onChange={(e) => handleKeywordChange(e)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full max-w-xl p-2.5"
                />
              </div>
            </form>
            <h2>絞り込み結果</h2>
            {filteredWorks.length === 0 ? (
              <p className="text-center py-10">条件を変更してください。</p>
            ) : (
              filteredWorks.map((post) => (
                <PostItem key={post.date} title={post.title} href={post.uri} date={post.date} />
              ))
            )}
          </>
        )}
      </Container>
    </div>
  );
};

export default WorksSearch;
