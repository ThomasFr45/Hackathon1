export const Profiles = () => {
  const profiles = JSON.parse(localStorage.getItem("formData"));
  const chosenGenres = profiles.genres
  console.log(profiles);

  return (
    <div>
       
          <p>{profiles.name}</p>
          <p>{profiles.firstName}</p>
          <p>{profiles.song}</p>
          {chosenGenres.map(item => 
          (<p>{item}</p>))}
    </div>
  )
}