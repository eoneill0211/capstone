import React, { useState, useEffect } from "react";




const Employees = (props) => {

    const [characterData, setCharacterData] = useState([]);
    useEffect(() => {
        const fetchCharacterData = async () => {
            try {
                //const response = await fetch(import.meta.env.VITE_SWAPI_URL);

                const response = await fetch('http://localhost:3000/employee_directory');

                if (!response.ok) {
                    throw new Error('Data could not be fetched!');
                }
                const json_response = await response.json();
                setCharacterData(json_response);
                console.log(characterData);
                console.log(characterData[0]["result"]);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchCharacterData();
    }, [characterData]);


    const [searchTerm, setSearchTerm] = useState('');
    const handleChange = (e) => {
        setSearchTerm(e.target.value);
        console.log(searchTerm);
    };


    console.log("We are here");
    if (characterData.length > 1) {
        return (
            <><div>
                <form className="d-flex" role="search" action={'/employee_directory/' + searchTerm}>
                    <input className="form-control me-2" type="search"
                        placeholder="Search" aria-label="Search"
                        value={searchTerm} onChange={handleChange} />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div><div className="col">
                    <h1>Employees</h1>
                    {characterData.map(char => <div> <a href={'/employee_directory/' + char.id}>{char.result.username} </a></div>)}
                </div></>
        );
    }

    const render = () => {
        if (props.length > 0) {
            // const linkMarkup = props.search.map((link) => (
            //     Array.from(props)
            // ));

            return <ul className="link-list">{linkMarkup}</ul>;
        } else {
            return <p>No employee data found</p>
        }
    }

    return render()
};
export default Employees;

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