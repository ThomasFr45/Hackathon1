import MockData from '../MOCK_DATA.json';
import {useState} from 'react';

const Teachers = () => {
  const [search, setSearch] = useState("");
  return ( 
    <div className="container">
      <input 
      type="text" 
      placeholder="search.." 
      className="form-control" 
      style={{ marginTop:50, marginBottom: 20, width: "40%" }}
      onChange={(e)=>{
        setSearch(e.target.value);
      }}
        />
          <div className='cards'>
          {MockData.filter(val => {
            if (search === "") {
              return val;
            }
            else if (
              val.first_name?.toLowerCase().includes(search.toLowerCase()) ||
              val.last_name?.toLowerCase().includes(search.toLowerCase()) ||
              val.music?.toLowerCase().includes(search.toLowerCase()) 
            ){
              return val;
            }
          }).map((user) => (
            <div className="card">
              <img className="userImage" src={user.picture} alt="" />
              <div className="infos">
                <img src={user.image} alt=""/>
                <p>Prénom : {user.first_name}</p>
                <p>Nom : {user.last_name}</p>
                <p>Genre : {user.music}</p>
              </div>
              </div>
          ))
          }
          </div>
    </div>
   );
}
 
export default Teachers;