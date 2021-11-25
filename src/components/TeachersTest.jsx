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

      <table className="table table-bordered">
        <thead className='thead-dark'>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {MockData.filter(val => {
            if (search === "") {
              return val;
            }
            else if (
              val.first_name.toLowerCase().includes(search.toLowerCase()) ||
              val.last_name.toLowerCase().includes(search.toLowerCase())
            ){
              return val;
            }
          }).map((m) => (
            <tr key={m.id}>
              <td>{m.first_name}</td>
              <td>{m.last_name}</td>
              <td>{m.email}</td>
              <td>{m.gender}</td>
              </tr>
          ))}
        </tbody>
      </table>

    </div>
   );
}
 
export default Teachers;