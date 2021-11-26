import { useState } from "react";
import Navbar from "./Navbar";
import Banniere from "./Banniere";

const Inscription = () => {
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
    alert(`Bonjour ${name}, votre inscription à bien été prise en compte.`)
    localStorage.setItem("formData", JSON.stringify(formData));
    setTimeout(()=>  window.location.href = "http://localhost:3000/", 10);
  }
  return (
    <>
    <Navbar />
          <Banniere title="Voyez fournir vos informations afin de compléter l'inscription !" />
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
      onChange={(e) => setFirstName(e.target.value)} />
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
      <div
        className={!genres.includes("rock")? "genreButton" : "genreButtonClicked"} 
        onClick={() => handleGenres('rock')}>Rock</div>
      <div
        className={!genres.includes("hiphop")? "genreButton" : "genreButtonClicked"} 
        onClick={() => handleGenres('hiphop')}>Hiphop</div>
      <div 
        className={!genres.includes("rap")? "genreButton" : "genreButtonClicked"}
        onClick={() => handleGenres('rap')}>Rap</div>
      <div 
        className={!genres.includes("raggae")? "genreButton" : "genreButtonClicked"} 
        onClick={() => handleGenres('raggae')}>Raggae</div>
      <div 
        className={!genres.includes("funk")? "genreButton" : "genreButtonClicked"} 
        onClick={() => handleGenres('funk')}>Funk</div>
      <div 
        className={!genres.includes("pop")? "genreButton" : "genreButtonClicked"}
        onClick={() => handleGenres('pop')}>Pop</div>
      <div 
        className={!genres.includes("jazz")? "genreButton" : "genreButtonClicked"}
        onClick={() => handleGenres('jazz')}>Jazz</div>
      <div 
        className={!genres.includes("electronic")? "genreButton" : "genreButtonClicked"}
        onClick={() => handleGenres('electronic')}>Electronique</div>
      <div 
        className={!genres.includes("classical")? "genreButton" : "genreButtonClicked"}
        onClick={() => handleGenres('classical')}>Classique</div>
      <div 
        className={!genres.includes("latin")? "genreButton" : "genreButtonClicked"}
        onClick={() => handleGenres('latin')}>Latine</div>
      <div 
        className={!genres.includes("soul")? "genreButton" : "genreButtonClicked"}
        onClick={() => handleGenres('soul')}>Soul</div>
      <div 
        className={!genres.includes("country")? "genreButton" : "genreButtonClicked"}
        onClick={() => handleGenres('country')}>Country</div>
      <div 
       className={!genres.includes("blues")? "genreButton" : "genreButtonClicked"}
         onClick={() => handleGenres('blues')}>Blues</div>
      <br />
    </div>
    <button className="submitButton" type="submit">Go!</button>
  </form>
  </>
  );
}

export default Inscription;