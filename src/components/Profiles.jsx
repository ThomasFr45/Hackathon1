export const Profiles = () => {
  const profiles = JSON.parse(localStorage.getItem("formData"));
  console.log(profiles);

  return (
    <div>
       
          <p>{profiles.name}</p>
          <p>{profiles.firstName}</p>
          <p>{profiles.artist}</p>
      
     
    </div>
  )
}