import { useState } from "react";
import leftSvg from "../assets/arrow-left.svg";
import rightSvg from "../assets/arrow-right.svg";

const Pagination = () => {
  const active = "text-[white] bg-[#5677fc] rounded-[50%]";
  const [colorSvg, setColorSvg] = useState("#464646");
  console.log(colorSvg);
  return (
    <div className="flex justify-between px-5 py-4 mx-auto bg-[white] my-[20px] items-center">
      <div
        onMouseEnter={() => setColorSvg("white")}
        onMouseLeave={() => setColorSvg("#464646")}
        className="flex justify-center p-2 rounded-[50%] hover:bg-[#5677fc]"
      >
        <svg
          fill={colorSvg}
          width="20px"
          viewBox="0 0 32 32"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          stroke={colorSvg}
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0" />
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path d="M23.505 0c0.271 0 0.549 0.107 0.757 0.316 0.417 0.417 0.417 1.098 0 1.515l-14.258 14.264 14.050 14.050c0.417 0.417 0.417 1.098 0 1.515s-1.098 0.417-1.515 0l-14.807-14.807c-0.417-0.417-0.417-1.098 0-1.515l15.015-15.022c0.208-0.208 0.486-0.316 0.757-0.316z" />{" "}
          </g>
        </svg>
      </div>
      <div className="flex gap-[5px]">
        <span
          className={`${active} cursor-pointer text-[16px] px-[16px] py-[9px] font-semibold hover:text-[white] hover:bg-[#5677fc] hover:rounded-[50%]`}
        >
          1
        </span>
        <span className="cursor-pointer text-[16px] px-[16px] py-[9px] font-semibold hover:text-[white] hover:bg-[#5677fc] hover:rounded-[50%]">
          2
        </span>
        <span className="cursor-pointer text-[16px] px-[16px] py-[9px] font-semibold hover:text-[white] hover:bg-[#5677fc] hover:rounded-[50%]">
          3
        </span>
        <span className="cursor-pointer text-[16px] px-[16px] py-[9px] font-semibold hover:text-[white] hover:bg-[#5677fc] hover:rounded-[50%]">
          4
        </span>
        <span className="cursor-pointer text-[16px] px-[16px] py-[9px] font-semibold hover:text-[white] hover:bg-[#5677fc] hover:rounded-[50%]">
          5
        </span>
      </div>
      <div
        className="flex justify-center p-2 rounded-[50%] hover:bg-[#5677fc]"
      >
        <img width={'20px'} src={rightSvg} alt="" />
      </div>
    </div>
  );
};

export default Pagination;
