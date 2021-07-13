import React from 'react';
import { useSelector } from 'react-redux';

export const People = () => {
  const people = useSelector(state => state.app.people);

  console.log('people', people);

  return (
    <main className="main-people">
      {people.map(item => (
        <div className="card" key={item.name}>
          <div className="gab">
            <div className="avatar">
              <div className="avatar__img">LS</div>
            </div>
            <div className="body">
              <p className="body__text">Name:{item.name}</p>
              <p className="body__text"> Birth year:{item.birth_year}</p>
              <p className="body__text">Gender:{item.gender}</p>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
};
