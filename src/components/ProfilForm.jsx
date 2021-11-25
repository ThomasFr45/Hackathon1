import { useState } from "react";
import './ProfileForm.css';

export const ProfilForm = () => {

  const [name, setName] = useState();
  const [firstName, setFirstName] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState();
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
      age: age,
      email: email,
      genres: genres,
      song: song,
    }
    console.log(formData);
    localStorage.setItem("formData", JSON.stringify(formData));
  }

  return (
<div className="container">
  <form onSubmit={(e) => sendData(e)}>
    <input 
      type="text" 
      placeholder="Votre nom" 
      value={name} 
      onChange={(e) => setName(e.target.value)}/>
    <input 
      type="text" 
      placeholder="Votre prénom" 
      value={firstName} 
      onChange={(e) => setFirstName(e.target.value)} /> <br />
   <input 
      type="text" 
      placeholder="Votre chanson du moment" 
      value={song} 
      onChange={(e) => setSong(e.target.value)} /><br />
    <input 
      type="text" 
      placeholder="Votre email" 
      value={email} 
      onChange={(e) => setEmail(e.target.value)}/>
    <input 
      type="text" 
      placeholder="Votre âge" 
      value={age} 
      onChange={(e) => setAge(e.target.value)}/>
    <br />

<label className="genreTitle" htmlFor="favoriteSong">Sélectionnez vos genres préférés</label><br />
    <div className="genres">

      <button 
        className={!genres.includes("rock")? "genreButton" : "genreButtonClicked"} 
        onClick={() => handleGenres('rock')}>Rock</button>
      <button 
        className={!genres.includes("hiphop")? "genreButton" : "genreButtonClicked"} 
        onClick={() => handleGenres('hiphop')}>Hiphop</button>
      <button 
        className={!genres.includes("rap")? "genreButton" : "genreButtonClicked"}
        onClick={() => handleGenres('rap')}>Rap</button>
      <button 
        className={!genres.includes("raggae")? "genreButton" : "genreButtonClicked"} 
        onClick={() => handleGenres('raggae')}>Raggae</button>
      <button 
        className={!genres.includes("funk")? "genreButton" : "genreButtonClicked"} 
        onClick={() => handleGenres('funk')}>Funk</button>
      <button 
        className={!genres.includes("pop")? "genreButton" : "genreButtonClicked"}
        onClick={() => handleGenres('pop')}>Pop</button>
      <button 
        className={!genres.includes("jazz")? "genreButton" : "genreButtonClicked"}
        onClick={() => handleGenres('jazz')}>Jazz</button>
      <button 
        className={!genres.includes("electronic")? "genreButton" : "genreButtonClicked"}
        onClick={() => handleGenres('electronic')}>Electronique</button>
      <button 
        className={!genres.includes("classical")? "genreButton" : "genreButtonClicked"}
        onClick={() => handleGenres('classical')}>Classique</button>
      <button 
        className={!genres.includes("latin")? "genreButton" : "genreButtonClicked"}
        onClick={() => handleGenres('latin')}>Latine</button>
      <button 
        className={!genres.includes("soul")? "genreButton" : "genreButtonClicked"}
        onClick={() => handleGenres('soul')}>Soul</button>
      <button 
        className={!genres.includes("country")? "genreButton" : "genreButtonClicked"}
        onClick={() => handleGenres('country')}>Country</button>
      <button 
       className={!genres.includes("blues")? "genreButton" : "genreButtonClicked"}
         onClick={() => handleGenres('blues')}>Blues</button>
      <br />
    </div>
    <button className="submitButton" type="submit">Go!</button>
  </form>
</div>
  );
}


        