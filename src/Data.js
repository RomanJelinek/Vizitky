import React, {useState, useEffect} from 'react'
import axios from "axios"

function Data() {
    const [users, setUsers] = useState([])
    const [filteredUsers, setFilteredUsers] = useState(users);
    const [isInputEmpty, setInputEmpty] = useState(true)


    useEffect(() => {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
          setUsers(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);

   const getInput = (event) => {
      let value = event.target.value.toLowerCase();
      console.log(event)
       let result = [];
       result = users.filter((user) => {
         return user.name.toLowerCase().startsWith(value.toLowerCase());
       });
        setFilteredUsers(result);

        if (value === "") {
            setInputEmpty(true)
        }
        else {setInputEmpty(false)}
    };




    return (
      <div>
        Search: <input type="search" onChange={getInput}></input>
        
         {isInputEmpty === true ? (<ul>
            {users.map((user) => (
              <li key={user.id}>
                <b>{user.name}</b> <br></br>
                {user.address.street}
                <br></br>
                {user.address.suite}
                <br></br>
                {user.address.city}
                <br></br>
                <br></br>
              </li>
            ))}
          </ul>
      ) : (
       <ul>
            {filteredUsers.map((user) => (
              <li key={user.id}>
                <b>{user.name}</b> <br></br>
                {user.address.street}
                <br></br>
                {user.address.suite}
                <br></br>
                {user.address.city}
                <br></br>
                <br></br>
              </li>
            ))}
          </ul>
      )}
    </div>

          
       
    );
     
            }


export default Data
