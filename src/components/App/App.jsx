import React, { useState } from 'react';
import { Link, Route, Routes } from "react-router-dom";
import { Navigation } from '../Navigation/Navigation';

import './App.scss';
import { Fragment } from 'react';
import { RouteElement } from '../RouteElement';

const App = () => {
  const [searchValue, setSearchValue] = useState("");
  const [dataFromJson, setDataFromJson] = useState([]);
  
  const dataOfCompanies = JSON.parse(localStorage.getItem("dataOfCompanies")) || dataFromJson ;

  const filteredCompanies = dataOfCompanies.filter(item => {
    const searchRequest = searchValue.toLowerCase();
    const name = item.name.toLowerCase();
    return name.includes(searchRequest);
  });

  return (
    <div>
      <Navigation getQuery={setSearchValue} getData={setDataFromJson} importData={dataOfCompanies}/>

      <div className="main">
        <div className="main__sidebar">
          <ul className="main__group">

            {(dataFromJson.length === 0 && JSON.parse(localStorage.getItem('dataOfCompanies')) == null)&&
            (
              <p style={{textAlign: 'center'}}>Press Load to get data!</p>
            )}
            {((dataFromJson.length > 0 || JSON.parse(localStorage.getItem('dataOfCompanies'))) && filteredCompanies.length === 0)&&
            (
              <p style={{textAlign: 'center'}}>No companies</p>
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
                      <RouteElement data={item} />
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