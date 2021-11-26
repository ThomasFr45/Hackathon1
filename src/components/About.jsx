import Navbar from "./Navbar";
import Banniere from "./Banniere";
const About = () => {
  const musicMatch = [
    {
      name : "Kelly",
      linkedin: "https://www.linkedin.com/in/kelly-olida-46bb4a226/",
      github: "https://github.com/OlidaKelly"
    },
    {
      name : "Mathilde",
      linkedin: "https://www.linkedin.com/in/mathilde-elie-142743204/",
      github: "https://github.com/Mathilde-E"
    },
    {
      name : "Aphideth",
      linkedin: "https://www.linkedin.com/in/aphidethp/",
      github: "https://github.com/Aphideth"
    },
    {
      name : "Aurelien",
      linkedin: "https://www.linkedin.com/in/aurelien-ferrand-970149220/",
      github: "https://github.com/AurelFerrand"
    },
    {
      name : "Yosr",
      linkedin: "https://www.linkedin.com/in/yosr-taieb-36b18274/",
      github: "https://github.com/YosrTaieb"
    },
    {
      name : "Thomas",
      linkedin: "https://www.linkedin.com/in/thomas-fran%C3%A7ois-bba91a221/",
      github: "https://github.com/ThomasFr45"
    }
  ]
  return (
    <>
      <Navbar />
      <Banniere title="Premier Hackathon avec la team plop !" />
      <p>Projet réalisé par : Kelly, Mathilde, Aphideth, Aurelien, Yosr, et Thomas</p>
      <div className="ourCards">
      {musicMatch.map(person => (
        <div className="ourCard">
          <img className='ourImage' src="https://via.placeholder.com/350x150" alt="" />
          <h4 className="ourName">{person.name}</h4>
          <p><a href={person.linkedin}>LinkedIn</a></p>
          <p><a href={person.github}>Github</a></p>
        </div>
      ))}
      </div>
    </>
  );
};

export default About;
