import React, { useState } from "react";

import "./Search.css";

// This holds a list of some fiction people
// Some  have the same name but different age and id
const USERS = [
  {
    id: 1,
    gender: "male",
    pseudo: "Alexandre",
    age: 20,
    picture: "https://randomuser.me/api/portraits/men/29.jpg",
    music: "jazz , blues",
  },
  {
    id: 2,
    gender: "male",
    pseudo: "Felix",
    age: 24,
    picture: "https://randomuser.me/api/portraits/men/30.jpg",
    music: "hiphop , rap",
  },
  {
    id: 3,
    gender: "male",
    pseudo: "Jack",
    age: 27,
    picture: "https://randomuser.me/api/portraits/men/31.jpg",
    music: "raggae , funk",
  },
  {
    id: 4,
    gender: "male",
    pseudo: "Marc",
    age: 30,
    picture: "https://randomuser.me/api/portraits/men/32.jpg",
    music: "pop , rock",
  },
  {
    id: 5,
    gender: "male",
    pseudo: "Philippe",
    age: 32,
    picture: "https://randomuser.me/api/portraits/men/33.jpg",
    music: "raggae , jazz",
  },
  {
    id: 6,
    gender: "male",
    pseudo: "André",
    age: 35,
    picture: "https://randomuser.me/api/portraits/men/34.jpg",
    music: "classical , electronic",
  },
  {
    id: 7,
    gender: "male",
    pseudo: "Paul",
    age: 37,
    picture: "https://randomuser.me/api/portraits/men/35.jpg",
    music: "electronic , rock",
  },
  {
    id: 8,
    gender: "male",
    pseudo: "Esteban",
    age: 40,
    picture: "https://randomuser.me/api/portraits/men/36.jpg",
    music: "funk , latin",
  },
  {
    id: 9,
    gender: "male",
    pseudo: "Louis",
    age: 45,
    picture: "https://randomuser.me/api/portraits/men/37.jpg",
    music: "soul , country",
  },
  {
    id: 10,
    gender: "male",
    pseudo: "Peter",
    age: 70,
    picture: "https://randomuser.me/api/portraits/men/38.jpg",
    music: "blues , rock",
  },
  {
    id: 11,
    gender: "female",
    pseudo: "Clara",
    age: 20,
    picture: "https://randomuser.me/api/portraits/women/30.jpg",
    music: "hiphop , rock",
  },
  {
    id: 12,
    gender: "female",
    pseudo: "Alice",
    age: 25,
    picture: "https://randomuser.me/api/portraits/women/31.jpg",
    music: "funk , rock",
  },
  {
    id: 13,
    gender: "female",
    pseudo: "Vanessa",
    age: 30,
    picture: "https://randomuser.me/api/portraits/women/32.jpg",
    music: "blues , pop",
  },
  {
    id: 14,
    gender: "female",
    pseudo: "Eve",
    age: 35,
    picture: "https://randomuser.me/api/portraits/women/33.jpg",
    music: "latin , jazz",
  },
  {
    id: 15,
    gender: "female",
    pseudo: "Mathilde",
    age: 37,
    picture: "https://randomuser.me/api/portraits/women/34.jpg",
    music: "electronic , country",
  },
  {
    id: 16,
    gender: "female",
    pseudo: "Elsa",
    age: 40,
    picture: "https://randomuser.me/api/portraits/women/35.jpg",
    music: "pop , rock",
  },
  {
    id: 17,
    gender: "female",
    pseudo: "Louise",
    age: 45,
    picture: "https://randomuser.me/api/portraits/women/36.jpg",
    music: "raggae , rock",
  },
  {
    id: 18,
    gender: "female",
    pseudo: "Anaïs",
    age: 49,
    picture: "https://randomuser.me/api/portraits/women/37.jpg",
    music: "pop , latin",
  },
  {
    id: 19,
    gender: "female",
    pseudo: "Suzie",
    age: 54,
    picture: "https://randomuser.me/api/portraits/women/38.jpg",
    music: "hiphop , funk",
  },
  {
    id: 20,
    gender: "female",
    pseudo: "Vicky",
    age: 32,
    picture: "https://randomuser.me/api/portraits/women/39.jpg",
    music: "classical , jazz",
  },
];

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
    <div className="container">
      <input
        type="search"
        value={name}
        onChange={filter}
        className="input"
        placeholder="Search Match"
      />

      <div className="user-list">
        {foundUsers && foundUsers.length > 0 ? (
          foundUsers.map((user) => (
            <div className="card">
      <img src={user.picture} alt='' />
      <div className='infos'>
      <p>Pseudo : {user.pseudo}</p>
      <p>Genre : {user.gender}</p>
      <p>Age : {user.age}</p>
      </div>
      <h4>Genres Favoris :</h4>
      <div className='genres'>
        <p>{user.music}</p>
      </div>
    </div>
          ))
        ) : (
          <h1>No match found!</h1>
        )}
      </div>
    </div>
  );
}

export default Search;