import React from 'react';
import './Navigation.scss';
import dataFromJson from '../../data/shipments.json';

export class Navigation extends React.Component {
  state = {
    isLoaded: false,
    //arr
  }

  render() {

    return (  
      <div>
        <nav className="nav">
          <a
            href='/'
            className='nav__link'
          >
            Cargo Planner
          </a>
          <input
            type="text"
            className="search_input search"
            placeholder="Search"
            onChange={(event) => {
              this.props.getQuery(event.target.value);
              console.log(event.target.value);
            }}
          />
            <div className='nav__btn'>
              <button
                type="button"
                className='nav__btn-item'
                onClick={() => {
                  localStorage.getItem('dataOfCompanies');
                  JSON.parse(localStorage.getItem('dataOfCompanies'));
                }}
              >
                Load
              </button>
              <button
                type='button'
                className='nav__btn-item'
                onClick={() => {
                  localStorage.setItem('dataOfCompanies', JSON.stringify(dataFromJson));
                }}
              >
                Save
              </button>
            </div>
            
        </nav>
      </div>
      )
    }
  }

  
  