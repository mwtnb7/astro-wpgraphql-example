import React from 'react';

interface PaginationPrevNextProps {
  type: 'prev' | 'next';
  href: string;
}

const PaginationPrevNext: React.FC<PaginationPrevNextProps> = ({ type, href }) => {
  return (
    <>
      {type === 'prev' ? (
        <a
          href={href}
          aria-label="previous page"
          className="group mr-2 flex gap-1 text-base tracking-wider text-slate-700">
          <span className="duration-150 group-hover:text-teal-500">
            <span className="material-icons">chevron_left</span>
          </span>
          <span className="duration-150 group-hover:text-teal-500"> PREV </span>
        </a>
      ) : (
        <a href={href} aria-label="next page" className="group ml-2 flex gap-1 text-base tracking-wider text-slate-700">
          <span className="duration-150 group-hover:text-teal-500"> NEXT </span>
          <span className="duration-150 group-hover:text-teal-500">
            <span className="material-icons">chevron_right</span>
          </span>
        </a>
      )}
    </>
  );
};

export default PaginationPrevNext;
