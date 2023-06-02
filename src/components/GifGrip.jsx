import React, { useState, useEffect } from "react";
import { gifRequest } from "../helpers/gifRequest";
import { GifItem } from "./";
import "../styles/styles.css";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrip = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {isLoading && <h2>Cargando...</h2>}

      <div className='card-grid'>
        {images.map((data) => (
          <GifItem key={data.id} data={data} />
        ))}
      </div>
    </>
  );
};
