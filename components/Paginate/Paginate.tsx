import React from "react";
import ReactPaginate from "react-paginate";

interface IPaginateProps {
  onPageChange: (value: number) => void;
  itemsLength: number;
  itemPerPage: number;
  initialPage: number;
}

const Paginate = ({
  itemPerPage,
  itemsLength,
  initialPage,
  onPageChange,
}: IPaginateProps) => {
  const handlePageClick = (selectedItem: { selected: number }) => {
    onPageChange(selectedItem.selected);
  };

  const pageCount = Math.ceil(itemsLength / itemPerPage);

  return (
    <div dir="ltr" className="w-full">
      <ReactPaginate
        forcePage={initialPage}
        breakLabel={
          <div className="w-full h-full flex items-center text-brand-green-1">
            ...
          </div>
        }
        className="w-full flex justify-center gap-4 flex-wrap"
        pageClassName="w-12 h-12 border border-brand-green-1 text-brand-green-1 hover:bg-brand-green-1 hover:text-white transition-colors flex items-center justify-center rounded-2xl"
        activeClassName="w-12 h-12 border border-brand-green-1 text-white bg-brand-green-1 hover:bg-white hover:text-brand-green-1 transition-colors flex items-center justify-center rounded-2xl"
        pageLinkClassName="w-full h-full flex items-center justify-center"
        nextLabel={null}
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel={null}
        renderOnZeroPageCount={undefined}
      />
    </div>
  );
};

export default Paginate;
