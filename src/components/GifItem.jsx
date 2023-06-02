import React from "react";
import "../styles/styles.css";

export const GifItem = ({ data }) => {
  return (
    <div className='card'>
      <p>{data?.title}</p>
      <img src={data.url} alt={data.title}></img>
    </div>
  );
};
