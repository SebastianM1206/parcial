import React from "react";
import { Link } from "react-router";

const Presentation = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-10">
      <h1 className="text-5xl font-bold">Bienvenido al parcial</h1>
      <button className="text-3xl bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-700">
        <Link to="/home">Ir al Inicio</Link>
      </button>
    </div>
  );
};

export default Presentation;
