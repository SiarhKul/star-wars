import React from 'react';
import { useSelector } from 'react-redux';
import { ButtonLoadMore } from '../../components';

export const People = () => {
  const people = useSelector(state => state.app.people);

  console.log('people', people);

  return (
    <main className="main-people">
      <div className="cards-container">
        {people.map(person => (
          <div className="card" key={person.name}>
            <div className="gab">
              <div className="avatar">
                <div className="avatar__img">LS</div>
              </div>
              <div className="body">
                <p className="body__text">Name:{person.name}</p>
                <p className="body__text">Birth year:{person.birth_year}</p>
                <p className="body__text">Gender:{person.gender}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <ButtonLoadMore />
    </main>
  );
};
