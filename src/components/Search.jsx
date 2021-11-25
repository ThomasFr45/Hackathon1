import React, { useState } from 'react';

import "./Search.css";

// This holds a list of some fiction people
// Some  have the same name but different age and id
const USERS = [
  { id: 1, name: 'Aphidet', age: 28 },
  { id: 2, name: 'Yosr', age: 28 },
  { id: 3, name: 'Kelly', age: 28 },
  { id: 4, name: 'Aurelien', age: 28 },
  { id: 5, name: 'Mathilde', age: 28 },
  { id: 6, name: 'Paul', age: 28 },
  { id: 7, name: 'Thomas', age: 28 },
  { id: 8, name: 'Pierre', age: 28 },
  { id: 9, name: 'Jean', age: 28 },
];

function Search() {
  const [name, setName] = useState('');
  const [foundUsers, setFoundUsers] = useState(USERS);

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = USERS.filter((user) => {
        return user.name.toLowerCase().startsWith(keyword.toLowerCase());
        
      });
      setFoundUsers(results);
    } else {
      setFoundUsers(USERS);
      
    }

    setName(keyword);
  };

  return (
    <div className="container">
      <input
        type="search"
        value={name}
        onChange={filter}
        className="input"
        placeholder="Filter"
      />

      <div className="user-list">
        {foundUsers && foundUsers.length > 0 ? (
          foundUsers.map((user) => (
            <li key={user.id} className="user">
              <span className="user-id">{user.id}</span>
              <span className="user-name">{user.name}</span>
              <span className="user-age">{user.age} age</span>
            </li>
          ))
        ) : (
          <h1>No results found!</h1>
        )}
      </div>
    </div>
  );
}

export default Search;