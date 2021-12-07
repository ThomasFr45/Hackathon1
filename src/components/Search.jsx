import React, { useState } from "react";
import USERS from "../data.js";
import { Link } from "react-router-dom";
import Select from "react-select";

function Search({ radio }) {
  //const [name, setName] = useState("");
  const [foundUsers, setFoundUsers] = useState();

  const filter = (e) => {
    console.log(e);
    const keyword = e;

    if (keyword !== "") {
      const results = USERS.filter((user) => {
        return user.music.toLowerCase().includes(keyword.toLowerCase());
      });
      setFoundUsers(results);
    } else {
      setFoundUsers("");
    }

    //setName(keyword);
  };

  const options = [
    { value: "Pop", label: "Pop" },
    { value: "HipHop", label: "HipHop" },
    { value: "Raggae", label: "Raggae" },
    { value: "Funk", label: "Funk" },
    { value: "Rock", label: "Rock" },
    { value: "Classique", label: "Classique" },
    { value: "Electronic", label: "Electronic" },
    { value: "Latin", label: "Latin" },
    { value: "Soul", label: "Soul" },
    { value: "Country", label: "Country" },
    { value: "Blues", label: "Blues" },
  ];
  return (
    <div>
      <h3 className="title">
        A la recherche de la personne parfaite pour écouter de la musique ou
        discuter de vos musiques préférées ensemble ? 
        <br />
        Vous êtes au bon endroit !
      </h3>
      <h4 className="titleB">
        Vous pouvez rechercher ici parmi nos utilisateurs validés, la personne
        qui vous convient le plus !
      </h4>
      {radio ? (<><audio controls autoplay>
  <source src="https://mangoradio.stream.laut.fm/mangoradio?t302=2021-11-25_21-19-10&uuid=03086fa9-407e-4f2a-b89e-506962cd4007" type="audio/ogg"/>
  <source src="https://mangoradio.stream.laut.fm/mangoradio?t302=2021-11-25_21-19-10&uuid=03086fa9-407e-4f2a-b89e-506962cd4007" type="audio/mpeg"/>
  </audio></>
) : null}
      <div className="containerSearch">
        {/* <input
          type="search"
          value={name}
          onChange={filter}
          className="input"
          placeholder="Search Match"
        /> */}
        <div className="select">
          <Select
            //isMulti
            options={options}
            className="basic-multi-select"
            classNamePrefix="select"
            onChange={(e) => {filter(e.value)}}
          /> 
        </div>
        <div className={foundUsers && foundUsers.length > 0 ? "searchBody" : null}>
          {foundUsers && foundUsers.length > 0 ? (
            <div className="userCards">
              {foundUsers.map((user) => (
                <div className="userCard">
                  <img className="userImage" src={user.picture} alt="" />
                  <div className="infos">
                    <p>Pseudo : {user.pseudo}</p>
                    <p>Genre : {user.gender}</p>
                    <p>Age : {user.age}</p>
                  </div>
                  <h4>Genres Favoris :</h4>
                  <div className="genresCard">
                    <p>{user.music}</p>
                  </div>
                  <div className="favMusics">
                    <h4>Chansons favorites :</h4>
                    {user.fav.split(" & ").map((music) => (
                      <Link
                        to={`/${music.split(" | ")[0]}/${
                          music.split(" | ")[1]
                        }`}
                      >
                        <p key={music}>{music}</p>
                      </Link>
                    ))}
                  </div>
                  <div className="contactButton">
                    <Link to={`/profiles/${user.pseudo}`}>
                      <button className="contactIt">Contacter</button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <h4>Recherches ton genre de musique favoris !</h4>
          )}
        </div>
      </div>
    </div>
  );
}

export default Search;
