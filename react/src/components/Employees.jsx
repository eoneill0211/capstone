import React, { useState, useEffect } from "react";

const Employees = (props) => {

    const [employeeData, setEmployeeData] = useState([]);

    //grab employee data
    useEffect(() => {
        const fetchEmployeeData = async () => {
            try {

                const response = await fetch('http://localhost:3000/employee_directory');

                if (!response.ok) {
                    throw new Error('Data could not be fetched!');
                }
                const json_response = await response.json();
                setEmployeeData(json_response);
                console.log(employeeData);
                console.log(employeeData[0]["result"]);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchEmployeeData();
    }, [employeeData]);

    //used to search for specific employee, see first div
    const [searchTerm, setSearchTerm] = useState('');
    const handleChange = (e) => {
        setSearchTerm(e.target.value);
        console.log(searchTerm);
    };


    console.log("We are here");
    if (employeeData.length > 1) {
        return (
            <><div>
                <form className="d-flex border" role="search" action={'/employee_directory/' + searchTerm}>
                    <input className="form-control me-2 " type="search"
                        placeholder="Search" aria-label="Search"
                        value={searchTerm} onChange={handleChange} />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div><div className="col">
                    <h1>Employees</h1>
                    {employeeData.map(char => <div> <a href={'/employee_directory/' + char.id}>{char.result.username} </a></div>)}
                </div></>
        );
    }

    const render = () => {
        if (props.length > 0) {
            return <ul className="link-list">{linkMarkup}</ul>;
        } else {
            return <p>No employee data found</p>
        }
    }

    return render()
};
export default Employees;
