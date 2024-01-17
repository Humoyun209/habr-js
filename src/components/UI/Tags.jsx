import React from "react";
import { Link } from "react-router-dom";

const Tags = ({tags, sep}) => {
    const formattedTags = tags.map((tag, index) => (
        <span key={index}>
          <Link
            className=" hover:underline text-primary"
            to={tag}
          >{tag}</Link>
          {index < tags.length - 1 && sep}
        </span>
      ));
    return (
        <span>
            { formattedTags }
        </span>
    )
}

export default Tags