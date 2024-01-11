const MainFilterLink = ({
  mainFilter,
  setMainFilter,
  activeStyles,
  linkId,
  children,
}) => {
  return (
    <span
      onClick={() => setMainFilter(linkId)}
      className={`${
        mainFilter == linkId ? activeStyles : "text-[#999999]"
      } text-[15px] font-semibold pb-2 cursor-pointer`}
    >
      {children}
    </span>
  );
};

export default MainFilterLink;
