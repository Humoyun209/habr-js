import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className=" flex my-40 justify-between items-center flex-col font-bold text-[40px]">
      <h1>404 Page Not Found</h1>
      <h4 className="text-[20px] font-medium">
        This Page doesn't exist{" "}
        <Link style={{ color: "gray", textDecoration: "underline" }} to={"/"}>
          Back to Home
        </Link>
      </h4>
    </div>
  );
};

export default NotFoundPage;
