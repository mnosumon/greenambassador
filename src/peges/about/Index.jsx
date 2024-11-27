import React, { useState } from "react";
import Paginate from "../../components/challangePaginate/ChallangeItemsPaginate";

const About = () => {
  const [itemsPerPage, setItemsPerPage] = useState(3);

  return (
    <>
      <section className="py-28">
        <div className="container mx-auto">
          <Paginate itemsPerPage={itemsPerPage} />
        </div>
      </section>
    </>
  );
};

export default About;
