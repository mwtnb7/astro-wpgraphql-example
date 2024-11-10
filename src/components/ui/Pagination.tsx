import React from 'react';
import PaginationItem from '@components/ui/PaginationItem';
import PaginationPrevNext from '@components/ui/PaginationPrevNext';
import { removeLastSegment } from '@utils/removeLastSegment';

interface Page {
  currentPage: number;
  lastPage: number;
  url: {
    current?: string | undefined;
    prev?: string;
    next?: string;
  };
}

interface PaginationProps {
  page: Page;
  adjacentPageNumber?: number;
}

const Pagination: React.FC<PaginationProps> = ({ page, adjacentPageNumber = 1 }) => {
  const getPath = (path: string | undefined, pageNum: number = 1) => {
    if (path === undefined) return '';
    const basePath = page.currentPage !== 1 ? removeLastSegment(path) : path;
    return pageNum === 1 ? `${basePath}/` : `${basePath}/${pageNum}/`;
  };

  return (
    <nav aria-label="pagination">
      <ul className="flex items-center justify-center mt-7">
        {page.url.prev && (
          <li>
            <PaginationPrevNext href={page.url.prev} type="prev" />
          </li>
        )}

        {Array.from({ length: page.lastPage }, (_, p) => p + 1)
          .filter((p) => page.currentPage - adjacentPageNumber <= p && p <= page.currentPage + adjacentPageNumber)
          .map((p) => (
            <li key={p}>
              <PaginationItem currentPage={page.currentPage} page={p} href={getPath(page.url.current, p)} />
            </li>
          ))}

        {page.currentPage < page.lastPage - adjacentPageNumber && (
          <>
            <li>&#8230;</li>
            <li>
              <PaginationItem
                currentPage={page.currentPage}
                page={page.lastPage}
                href={getPath(page.url.current, page.lastPage)}
              />
            </li>
          </>
        )}

        {page.url.next && (
          <li>
            <PaginationPrevNext href={page.url.next} type="next" />
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
