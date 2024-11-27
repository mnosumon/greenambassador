import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import ChallangeItem from "../../mapItem/challangeCard/CardObject";
import Peragrap from "../utilities/Peragrap";
import { Clock } from "../../assets/svg/Clock";
import { TaskClip } from "../../assets/svg/TaskClip";
import Heading from "../utilities/Heading";
import PrimaryBTN from "../utilities/PrimaryBTN";
import { Link } from "react-router-dom";

function Items({ currentItems }) {
  console.log(currentItems);

  return (
    <>
      <div className="grid grid-cols-3  justify-between gap-8 py-10">
        {currentItems &&
          currentItems.map((item, index) => (
            <div
              key={index}
              className="w-full rounded-md shadow-md overflow-hidden relative transition-all duration-300 ease-in-out hover:shadow-[#8b8585] hover:-translate-y-3"
            >
              {/* Image Section */}
              <Link className="w-full h-[250px] block relative">
                <img
                  className="w-full h-full object-cover"
                  src={item.image}
                  alt={item.title || "Challange Image"}
                />
                <div className="w-full h-full hover:bg-[#7c717152] absolute top-0 left-0 transition-all duration-300 ease-in-out"></div>
                <PrimaryBTN
                  className="absolute right-5 bottom-5 !px-3 !py-1 rounded-md !text-sm z-10"
                  title={item.isActive}
                />
              </Link>

              {/* Content Section */}
              <div className="px-6 pb-20 pt-10 box-border ">
                <PrimaryBTN
                  className="!bg-[#009b722c] hover:!bg-primary !text-primary hover:text-subHeading rounded-md !px-3 !py-1 !text-base"
                  title={item.category}
                />
                <Heading
                  className="!text-heading !text-3xl !leading-[1.2] mt-6 mb-3 cursor-pointer"
                  title={item.title}
                />
                <Peragrap
                  className="!text-heading !text-lg !leading-[1.3]"
                  title={item.description}
                />
              </div>

              {/* Footer Section */}
              <div className="flex items-center justify-between px-6 py-3 box-border overflow-hidden absolute left-0 bottom-0 border-t border-lineColor w-full">
                <div className="flex items-center gap-2">
                  <div className="text-primary">
                    <TaskClip />
                  </div>
                  <Peragrap
                    className="!text-heading !text-lg"
                    title={item.task}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-primary">
                    <Clock />
                  </div>
                  <Peragrap
                    className="!text-heading !text-lg"
                    title={item.time}
                  />
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

const Paginate = ({ itemsPerPage }) => {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = ChallangeItem.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(ChallangeItem.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % ChallangeItem.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <div className="flex justify-center">
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          pageLinkClassName="px-4 py-2 text-base font-normal border border-[#D8D8D8] inline-block"
          pageClassName="m-2"
          containerClassName="flex gap-3 items-center"
          nextClassName="px-4 py-2 text-base font-normal border border-[#D8D8D8] inline-block"
          previousLinkClassName="px-4 py-2 text-base font-normal border border-[#D8D8D8] inline-block"
        />
      </div>
    </>
  );
};

export default Paginate;
