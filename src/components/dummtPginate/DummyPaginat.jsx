import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

function Items({ currentItems }) {
  return (
    <>
      <div className="flex gap-10 flex-wrap mb-[50px]">
        {currentItems &&
          currentItems.map((item, index) => (
            <div>
              <h1>{item}</h1>
            </div>
          ))}
      </div>
    </>
  );
}

const Paginate = ({ itemsPerPage }) => {
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <div className="flex justify-between">
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          pageLinkClassName="p-4 text-base font-normal border border-[#D8D8D8] inline-block"
          pageClassName="m-2"
          containerClassName="flex gap-3 items-center"
        />
      </div>
    </>
  );
};

export default Paginate;
