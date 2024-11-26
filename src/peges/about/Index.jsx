import React, { useState } from "react";
import Paginate from "../../components/dummtPginate/DummyPaginat";

const About = () => {
  const [itemsPerPage, setItemsPerPage] = useState(4);

  return (
    <>
      <section className="mb-[140px] mt-[124px]">
        <div className="container mx-auto">
          <Paginate
            setItemsPerPage={setItemsPerPage}
            itemsPerPage={itemsPerPage}
          />
        </div>
      </section>
    </>
  );
};

export default About;
