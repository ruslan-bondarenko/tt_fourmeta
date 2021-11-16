import React, { useState } from "react";

export const RouteElement = (item) => {
  const [inputValue, setInputValue] = useState(item.data.boxes);

  const [currentId, setCurrentId] = useState(item.data.id);

  console.log("Route item", item.data);

  if (currentId !== item.data.id) {
    setCurrentId(item.data.id);
    setInputValue(item.data.boxes);

    if (item.data.boxes == null) {
      setInputValue('');
    }
  }

  return (
    <div className="main__items">
      <h2 className="main__company-name">{item.data.name}</h2>
      <h3 className="main__company-email"><a href={`mailto:${item.data.email}`}>{item.data.email}</a></h3>
      <p
        className="main__company-num-of-boxes"
      >
        Number of required cargo bays: {(inputValue !== null) ? inputValue.split(',').filter(el => el !== '').length : 0}
      </p>
      <label
        htmlFor="cargo-boxes"
        className="main__company-cargo-title"
      >
        Cargo boxes:
      </label>
      <input
        type="text"
        id="cargo-boxes"
        className="main__company-cargo-put"
        value={inputValue}
        onChange={(event) => {
          setInputValue(event.target.value);
          item.data.boxes = event.target.value;
        }}
      />
    </div>
  );
}