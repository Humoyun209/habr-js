const Button = ({ children, ...props }) => {
  return (
    <button
      className="bg-blue text-white font-semibold text-[14px] px-4 py-2 rounded-[5px] w-max"
      {...props}
    >
      {children}
    </button>
  );
};


export default Button