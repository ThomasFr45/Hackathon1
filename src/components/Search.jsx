import React, { useState } from "react";
import USERS from '../data.js';

import "./Search.css";

// This holds a list of some fiction people
// Some  have the same name but different age and id

function Search() {
  const [name, setName] = useState("");
  const [foundUsers, setFoundUsers] = useState();

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== "") {
      const results = USERS.filter((user) => {
        return user.music.toLowerCase().includes(keyword.toLowerCase());
      });
      setFoundUsers(results);
    } else {
      setFoundUsers("");
    }

    setName(keyword);
  };

  return (
    <div>
      <h3>
        A la recherche de la personne parfaite pour écouter de la musique ou
        discuter de vos musiques préférés ensemble ? Vous êtes au bon endroit !
      </h3>
      <h4>
        Vous pouvez rechercher ici parmis nos utilisateurs validés la personne
        qui vous convient le plus !
      </h4>
      <div className="container">
        <input
          type="search"
          value={name}
          onChange={filter}
          className="input"
          placeholder="Search Match"
        />

          {foundUsers && foundUsers.length > 0 ? (
            <div className="cards">
            {foundUsers.map((user) => (
                <div className="card">
                <img src={user.picture} alt="" />
                <div className="infos">
                  <p>Pseudo : {user.pseudo}</p>
                  <p>Genre : {user.gender}</p>
                  <p>Age : {user.age}</p>
                </div>
                <h4>Genres Favoris :</h4>
                <div className="genres">
                  <p>{user.music}</p>
              </div>
              <button className='contactIt'>Contacter</button>
              </div>
            ))}
            </div>
          ) : (
            <h4>Essais de rechercher ton genre de musique farovis !</h4>
          )}
          </div>
          </div>
      );
}

export default Search;
