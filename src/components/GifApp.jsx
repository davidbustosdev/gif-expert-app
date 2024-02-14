import { useState } from "react";
import { GifInput, GifGrip } from "./";

export const GifApp = () => {
  const [categories, setCategories] = useState([]);
  const apiKey = "yTLejY6f7Rs73XJ0dUULuhHc0Btngi7z";

  return (
    <>
      <h1>Random Gif App</h1>
      <GifInput categories={categories} setCategories={setCategories} />

      <ol>
        {categories.map((category) => (
          <GifGrip key={Math.random()} category={category} />
        ))}
      </ol>
      {/*gif item*/}
    </>
  );
};
