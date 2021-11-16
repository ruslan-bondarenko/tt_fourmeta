import React from 'react';
import './Navigation.scss';
import { getCompanies } from '../../api/api';

export class Navigation extends React.Component {
  state = {
    companies: [],
  }
  
  async restoreData() {
    const companies = await getCompanies();
    this.setState({ companies });
  }

  componentDidMount() {
    this.restoreData();
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
            }}
          />
            <div className='nav__btn'>
              <button
                type="button"
                className='nav__btn-item'
                onClick={() => {
                  console.log("Load");
                  this.restoreData();
                  this.props.getData(this.state.companies);
                }}
              >
                Load
              </button>

              <button
                type='button'
                className='nav__btn-item'
                onClick={() => {
                  console.log("Save");
                  localStorage.setItem('dataOfCompanies', JSON.stringify(this.props.importData));
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

  
  