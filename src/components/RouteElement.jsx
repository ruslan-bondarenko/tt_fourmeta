import classNames from "classnames";
import React, { useState } from "react";

export const RouteElement = (item) => {
  const [inputValue, setInputValue] = useState(item.data.boxes);

  const [currentId, setCurrentId] = useState(item.data.id);
  const [inputError, setInputError] = useState(false);

  if (currentId !== item.data.id) {
    setCurrentId(item.data.id);
    setInputError(false);
    setInputValue(item.data.boxes);

    if (item.data.boxes == null) {
      setInputValue('');
    }
  }

  return (
    <div className="main__items">
      <h2 className="main__company-name title">{item.data.name}</h2>
      <h3 className="main__company-email subtitle"><a href={`mailto:${item.data.email}`}>{item.data.email}</a></h3>
      <p
        className="main__company-num-of-boxes"
      >
        Number of required cargo bays: {(inputValue !== null) ? Math.ceil(inputValue.split(',').reduce((sum, n) => sum + Number(n) / 10, 0)) : 0}
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
        className={classNames({
          "input main__company-cargo-put": true,
          "input is-danger": inputError,
        })}
        value={inputValue}
        onChange={(event) => {
          if (!event.target.value.split(',').filter(el => el !== '').every(el => Number(el))) {
            setInputError(true);
          } else {
            setInputError(false);
            setInputValue(event.target.value.trim());
            item.data.boxes = event.target.value.trim();
          }
        }}
      />
      {inputError && (
        <div style={{color: "#f00", margin: "10px 0 0 0"}}>Invalid value, enter only numbers!</div>
      )}
    </div>
  );
}