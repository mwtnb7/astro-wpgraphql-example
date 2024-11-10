import React from 'react';

interface PaginationItemProps {
  currentPage: number;
  page: number;
  href: string;
}

const PaginationItem: React.FC<PaginationItemProps> = ({ currentPage, page, href }) => {
  const isActive = currentPage === page;

  return (
    <a
      href={href}
      aria-label={`page ${page}`}
      aria-current={isActive ? 'page' : undefined}
      className={`flex h-8 w-8 items-center justify-center rounded-[4px] text-xl duration-150 ${
        isActive ? 'border border-teal-500 text-teal-500' : 'text-slate-700 hover:text-teal-500'
      }`}>
      {page}
    </a>
  );
};

export default PaginationItem;
