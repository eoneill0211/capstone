import React, { useState, useEffect, useContext } from "react";

import Employees from './Employees'
import { Context } from './Context'



const EmployeeId = (props) => {

  const [characterData, setCharacterData] = useState([]);
  useEffect(() => {
    const fetchCharacterData = async () => {
      try {
        const lastItem = window.location.href.substring(window.location.href.lastIndexOf('/') + 1)
        // const response = await fetch(import.meta.env.VITE_SWAPI_URL+ '/'+ lastItem);
        const response = await fetch("http://localhost:3000/employee_directory" + '/' + lastItem);

        //console.log(import.meta.env.VITE_SWAPI_URL+ '/' +lastItem);
        if (!response.ok) {
          throw new Error('Data could not be fetched!');
        }
        const json_response = await response.json();
        setCharacterData(json_response);
        console.log(characterData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchCharacterData();
  }, [characterData]);



  console.log("We are here");

  const [context, setContext] = useContext(Context);


  const [searchTerm, setSearchTerm] = useState('');
  const handleChange = (e) => {
      setSearchTerm(e.target.value);
      console.log(searchTerm);
  };

  if (characterData[0]) {
    setContext(6);

    return (




      <><><div>
        <form className="d-flex" role="search" action={'/employee_directory/' + searchTerm}>
          <input className="form-control me-2" type="search"
            placeholder="Search" aria-label="Search"
            value={searchTerm} onChange={handleChange} />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div></><div className="col">
          <h1>{characterData[0].result.name.first + " " + characterData[0].result.name.last}'s Information</h1>
          {<div>{"Context: " + context}</div>}
          {<div>{"Name: " + characterData[0].result.name.first + " " + characterData[0].result.name.last}</div>}
          {<div>{"Username: " + characterData[0].result.username}</div>}
          {<div>{"Phone Number: " + characterData[0].result.phoneNumber}</div>}
          {<div>{"Role: " + characterData[0].result.job}</div>}
          {<div>{"Location: " + characterData[0].result.location.state}</div>}
          {<div>{"Salary: " + characterData[0].result.salary * 100}</div>}
          setContext(6);
          {<div>{"Salary: " + context}</div>}
          {<form action="/employee_directory">
            <input type="submit" value="Back" />
          </form>}






          {/* {<div>{"Gender: " + characterData[0].gender}</div>} */}
          {/* {<div>{"Skin Color: " + characterData[0].skin_color}</div>} */}
          {/* {<div>{"Hair Color: " + characterData[0].hair_color}</div>} */}
          {/* {<div>{"Height: " + characterData[0].height}</div>} */}
          {/* {<div>{"Eye Color: " + characterData[0].eye_color}</div>}
          {<div>{"Mass: " + characterData[0].mass}</div>}
          {<div>{"Homeworld: " + characterData[0].homeworld}</div>}
          {<div>{"Birth Year: " + characterData[0].birth_year}</div>} */}



          {/* {characterData.map(char => <div > <a href={'/characters/' + char.id}>{char.name} {char.age} </a></div>)} */}
        </div></>
    );
  }

  const render = () => {
    if (props.length > 0) {
      const linkMarkup = props.search.map((link) => (
        Array.from(props)
      ));

      return <ul className="link-list">{linkMarkup}</ul>;
    } else {
      return <p>No data found for: {props.sentence}</p>
    }
  }

  //return render()
};
export default EmployeeId;

// const characters = () => {
//     const [characterData, setsetCharacterData] = useState({
//         characterData: {
//             name: "", // Default set as 'Small'
//             gender: "",
//             skin_color: "",
//             hair_color: "",
//             height: "", // Default set as 'New'
//             eye_color: "", // Default set as 'Left'
//             mass: "",
//             homeworld: "",
//             birth_year: ""
//         }
//     }),