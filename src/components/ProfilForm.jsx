import { useState } from "react";
import "./ProfilForm.css"

export const ProfilForm = () => {

  const [name, setName] = useState();
  const [firstName, setFirstName] = useState();
  const [song, setSong] = useState();
  const [genres, setGenres] = useState();

  const sendData = (e) => {
    e.preventDefault();
    let formData = {
      name: name,
      firstName : firstName,
      genres: genres,
      song: song,
    }
    console.log(formData);
    localStorage.setItem("formData", JSON.stringify(formData));
  }

  return (
<div>
  <form onSubmit={(e) => sendData(e)}>
    <label htmlFor="Nom">Nom</label><br />
    <input type="text" value={name} onChange={(e) => setName(e.target.value)}/><br />
    <label htmlFor="Prénom">Prénom</label><br />
    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} /><br />
    <label htmlFor="favoriteSong">Vos genres préférés</label><br />
    <input type="text" value={genres} onChange={(e) => setGenres(e.target.value)} /><br />
    <label htmlFor="favoriteSong">Votre chanson du moment:</label><br />
    <input type="text" value={song} onChange={(e) => setSong(e.target.value)} /><br />
    <button type="submit">C'est parti!</button>
  </form>
</div>
  );
}