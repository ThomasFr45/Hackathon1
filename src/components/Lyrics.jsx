
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Navbar from "./Navbar";
import Banniere from "./Banniere";

const Lyrics = () => {
  const { artist, title } = useParams()
  const [ data, setData ] = useState([]);
  useEffect(() => {
    fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`).then(response => response.json().then(res => setData(res)))
  }, [artist, title])
  let start = '';
  if (data.lyrics) {
    for (let i = 0; i < 22 + title.length + 5 + artist.length+ 2; i++) {
      start = start + data.lyrics[i];
    }
    const lyrics = data?.lyrics.split('\n')
    return (
      <>
      <Navbar />
          <Banniere title="Les ploppers vaincront !" />
      <div className='Lyrics'>
        {lyrics.map((line, index) => index === 0 ? <h4 key={index}>{line} :</h4> : <p key={index}>{line}</p>)}
      </div>
      </>
    );
  }
  return (
    <>
    <Navbar />
          <Banniere title="Premier Hackathon avec la team plop !" />
  <p>Loading</p>
  </>
  )
}

export default Lyrics