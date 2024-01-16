import { useState } from "react";


const PaginationButton = ({ paddings, isActive, next, back, children, setCurrentPage }) => {
  const active = "text-[white] bg-[#5677fc] rounded-[50%]"
    const handleChange = (() => {
      if (next) {
        setCurrentPage(page => page !== 5 ? page + 1 : page)
      } else if (back) {
        console.log('back');
        setCurrentPage(page => page !== 1 ? page - 1 : page)
      } else {
        setCurrentPage(parseInt(children))
      }
    })
    return (
      <span
        onClick={handleChange}
        className={`${
          isActive === true ?  active  : ""
        } ${paddings} text-[16px] cursor-pointer font-semibold hover:text-[white] hover:bg-[#5677fc] hover:rounded-[50%]`}
      >
        {children}
      </span>
    );
};


const Pagination = () => {
  const pages = [1, 2, 3, 4, 5];
  const [currentPage, setCurrentPage] = useState(1)
  return (
    <div className="flex justify-between px-5 py-4 mx-auto bg-[white] my-[20px] items-center">
      <PaginationButton
        setCurrentPage={setCurrentPage}
        back={true}
        paddings="px-[14px] py-[5px] text-[22px] text-top"
      >
        &lt;
      </PaginationButton>
      <div className="flex gap-[5px]">
        {pages.map((page) => (
          <PaginationButton 
            setCurrentPage={setCurrentPage}
            key={page}
            paddings="px-4 py-2" 
            isActive={page===currentPage}
          >
            {page}
          </PaginationButton>
        ))}
      </div>
      <PaginationButton
        setCurrentPage={setCurrentPage}
        next={true}
        paddings="px-[14px] py-[5px] text-[22px] text-top"
      >
        &#62;
      </PaginationButton>
    </div>
  );
};

export default Pagination;
