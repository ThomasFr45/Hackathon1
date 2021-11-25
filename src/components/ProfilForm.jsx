import { useState } from "react";
import Banniere from './Banniere'

export const ProfilForm = () => {

  const [name, setName] = useState();
  const [firstName, setFirstName] = useState();
  const [song, setSong] = useState();
  const [genres, setGenres] = useState([]);

  const handleGenres = (checkedGenre) => {
    genres.includes(checkedGenre)
      ? setGenres(genres.filter((item) => item !== checkedGenre))
      : setGenres([...genres, checkedGenre])
  }
  

  const sendData = (e) => {
    e.preventDefault();
    let formData = {
      name: name,
      firstName : firstName,
      genres: genres,
      song: song,
    }
    alert(`Merci ${name} pour votre message.`)
    localStorage.setItem("formData", JSON.stringify(formData));
  }

  return (
<div>
<Banniere title="Premier Hackathon avec la team plop !" />
<div>
  <form onSubmit={(e) => sendData(e)}>
    <label htmlFor="Nom">Nom</label><br />
    <input type="text" value={name} onChange={(e) => setName(e.target.value)}/><br />
    <label htmlFor="Prénom">Prénom</label><br />
    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} /><br />
    <label htmlFor="favoriteSong">Vos genres préférés</label><br />
    <input type="checkbox" value={genres} onChange={() => handleGenres('rock')} />
    <label htmlFor="">Rock</label>
    <input type="checkbox" value={genres} onChange={() => handleGenres('hiphop')} />
    <label htmlFor="">Hiphop</label>
    <input type="checkbox" value={genres} onChange={() => handleGenres('rap')} />
    <label htmlFor="">Rap</label>
    <input type="checkbox" value={genres} onChange={() => handleGenres('raggae')} />
    <label htmlFor="">Raggae</label>
    <br />
    <input type="checkbox" value={genres} onChange={() => handleGenres('funk')} />
    <label htmlFor="">Funk</label>
    <input type="checkbox" value={genres} onChange={() => handleGenres('pop')} />
    <label htmlFor="">Pop</label>
    <input type="checkbox" value={genres} onChange={() => handleGenres('jazz')} />
    <label htmlFor="">Jazz</label>
    <input type="checkbox" value={genres} onChange={() => handleGenres('electronic')} />
    <label htmlFor="">Electronic</label>
    <br />
    <input type="checkbox" value={genres} onChange={() => handleGenres('classical')} />
    <label htmlFor="">Classical</label>
    <input type="checkbox" value={genres} onChange={() => handleGenres('latin')} />
    <label htmlFor="">Latin</label>
    <input type="checkbox" value={genres} onChange={() => handleGenres('soul')} />
    <label htmlFor="">Soul</label>
    <input type="checkbox" value={genres} onChange={() => handleGenres('country')} />
    <label htmlFor="">Country</label>
    <input type="checkbox" value={genres} onChange={() => handleGenres('blues')} />
    <label htmlFor="">Blues</label>
    <br />
    <label htmlFor="favoriteSong">Votre chanson du moment:</label><br />
    <input type="text" value={song} onChange={(e) => setSong(e.target.value)} /><br />
    <button type="submit">C'est parti!</button>
  </form>
</div>
</div>
  );
}


        