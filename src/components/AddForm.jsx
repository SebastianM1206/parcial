import React, { useState } from "react";
import Img from "./Img";

const AddForm = () => {
  const [search, setSearch] = useState("");
  const [allImgs, setAllImgs] = useState([
    { title: "imagen 1", url: "https://picsum.photos/200/300?random=1" },
  ]);
  const [imgs, setImgs] = useState(allImgs);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    if (value !== "") {
      const newImgs = allImgs.filter((img) =>
        img.title.toLowerCase().includes(value.toLowerCase())
      );
      setImgs(newImgs);
    } else {
      setImgs(allImgs);
    }
  };

  const handleAddImg = () => {
    const newImg = {
      title: `imagen ${allImgs.length + 1}`,
      url: `https://picsum.photos/200/300?random=${allImgs.length + 1}`,
    };
    const updatedImgs = [...allImgs, newImg];
    setAllImgs(updatedImgs);
    setImgs(updatedImgs);
  };

  return (
    <>
      <div className="flex gap-2 justify-center items-center pt-6">
        <input
          type="text"
          placeholder="Buscar imagen"
          className="border border-gray-300 rounded-lg p-2"
          value={search}
          onChange={handleSearch}
        />

        <button
          className="bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-700"
          onClick={handleAddImg}
        >
          Agregar
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4">
        {imgs.map((img, index) => (
          <div key={index} className="">
            <Img url={img.url} title={img.title} />
          </div>
        ))}
      </div>
    </>
  );
};

export default AddForm;
