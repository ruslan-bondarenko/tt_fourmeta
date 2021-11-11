import React, { useState } from 'react';
import { Link, Route, Routes} from "react-router-dom";
import { Navigation } from '../Navigation/Navigation';

import './App.scss';
import dataFromJson from '../../data/shipments.json';
import { Fragment } from 'react';

const App = () => {
  const [searchValue, setSearchValue] = useState("");
  // const [cargoBoxesValue, setCargoBoxesValue] = useState("");

  const filteredCompanies = dataFromJson.filter(item => {
    const searchRequest = searchValue.toLowerCase();
    const name = item.name.toLowerCase();
    return name.includes(searchRequest);
  });

  return (
    <div>
      <Navigation getQuery={setSearchValue} searchValue={searchValue}/>

      <div className="main">
        <div className="main__sidebar">
          <ul>
            {(filteredCompanies.length === 0 &&
              (<p>
                No companies
              </p> )
            )}

            {filteredCompanies.map(companies => {
              return (
                <li key={companies.id}>
                  <Link
                    to={`/${companies.id}`}
                    className="main__link"
                  >
                    {companies.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="main__content">
          <Routes>
            {filteredCompanies.map(item => {
              return (
                <Fragment key={item.id}>
                  <Route
                    path={`/${item.id}`}
                    element={
                    <div className="main__items">
                      <h2 className="main__company-name">{item.name}</h2>
                      <h3 className="main__company-email"><a href={`mailto:${item.email}`}>{item.email}</a></h3>
                      <p
                        className="main__company-num-of-boxes"
                      >
                        Number of required cargo bays: {(item.boxes !== null) ? item.boxes.split(',').length : 0}
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
                        value={item.boxes}
                        // onChange={(event) => {
                        //   // setCargoBoxesValue(event.target.value);
                        //   item.boxes = event.target.value;
                        // }}
                      />
                    </div>
                  }
                  />
                </Fragment>
              )
            })}
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App;