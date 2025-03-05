import React from "react";

const Img = ({ url, title }) => {
  return (
    <div className="bg-gray-200 rounded-lg overflow-hidden flex flex-col">
      <img src={url} alt={title} />
      <div className="p-4">
        <h2 className="font-bold text-md">{title}</h2>
      </div>
    </div>
  );
};

export default Img;
