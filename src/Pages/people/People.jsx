import React from 'react';
import { useSelector } from 'react-redux';

import { ButtonLoadMore } from '../../components';
import { getAbbreviation } from '../../utils';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const People = () => {
  const people = useSelector(state => state.app.people);
  const isLoaded = useSelector(state => state.app.isLoaded);

  return (
    <main className="main-people">
      <div className="cards-container">
        {people.map(person => (
          <div className="card-wrapper" key={person.name}>
            <div className="card">
              <div className="avatar">
                <div className="avatar__abbr">
                  {getAbbreviation(person.name)}
                </div>
              </div>
              <div className="body">
                <div className="body__text">Name:{person.name}</div>
                <div className="body__text">Birth year:{person.birth_year}</div>
                <div className="body__text">Gender:{person.gender}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {!isLoaded && <ButtonLoadMore />}
      <ToastContainer />
    </main>
  );
};
