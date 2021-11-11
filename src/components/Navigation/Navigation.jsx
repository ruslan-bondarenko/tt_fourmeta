import React from 'react';
import './Navigation.scss';

export class Navigation extends React.Component {
  state = {
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
              this.setState({ query: event.target.value });
              this.props.getQuery(event.target.value);
            }}
          />
          <div className='nav__btn'>
            <button
              type='button'
              className='nav__btn-item'
            >
              Load
            </button>
            <button
              type='button'
              className='nav__btn-item'
            >
              Save
            </button>
          </div>
        </nav>
      </div>
      )
    }
  }

  
  