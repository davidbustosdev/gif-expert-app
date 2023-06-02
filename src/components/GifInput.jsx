import React from "react";
import { useState } from "react";

export const GifInput = ({ categories, setCategories }) => {
  const [newCategory, setNewCategory] = useState("");

  const handleAddCategory = (e) => {
    e.preventDefault();
    if (categories.includes(newCategory)) return alert("ya existe");
    if (!newCategory) return alert("Debe ingresar un valor");

    setCategories([newCategory, ...categories]);
    setNewCategory("");
  };

  return (
    <>
      <form>
        <input
          onChange={(e) => setNewCategory(e.target.value)}
          value={newCategory}
          placeholder='Ingresa una categoría...'
        />
        <div style={{ marginTop: "5px" }}>
          <button onClick={handleAddCategory}>Agregar</button>
        </div>
      </form>
    </>
  );
};
