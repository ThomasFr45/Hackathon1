import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const Lyrics = () => {
  const { artist, title } = useParams()
  const [ data, setData ] = useState([]);
  useEffect(() => {
    axios.get(`https://api.lyrics.ovh/v1/${artist}/${title}`).then(result => setData(result.data))
  }, [artist, title])
  let start = '';
  if (data.lyrics) {
    for (let i = 0; i < 22 + title.length + 5 + artist.length+ 2; i++) {
      start = start + data.lyrics[i];
    }
    const lyrics = data?.lyrics.split('\n')
    return (
      <div className='Lyrics'>
        {lyrics.map((line, index) => index === 0 ? <h4 key={index}>{line} :</h4> : <p key={index}>{line}</p>)}
      </div>
    );
  }
  return <p>Loading</p>
}

export default Lyrics