import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import {
    BrowserRouter,
    Router,
    Route,
    Routes,
    Link
  } from "react-router-dom";
  import EmployeeId from './EmployeeId'




const Search = (props) => {
    const [searchTerm, setSearchTerm] = useState('');
    return (

            <Route path="/employee_directory/id" element={<EmployeeId />} />



    )
    const handleSubmit = (e) => {
        e.preventDefault();
        // fetch(`http://localhost:3000/employee_directory/search`, {
            fetch(`http://localhost:3000/employee_directory/` + searchTerm, {

            method: "GET"
        })
            .then((response) => response.json())
            .then((data) => {
                // Handle the response data
                props.setData(data);
                console.log(data);
            })
            .catch((error) => {
                // Handle any errors
                console.error(error);
            });
    };
    Navigate(`http://localhost:3000/employee_directory/` + searchTerm)

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
        console.log(searchTerm);
    };

    return (
        <form className="d-flex" role="search" onSubmit={handleSubmit}>
            <input className="form-control me-2" type="search"
                placeholder="Search" aria-label="Search"
                value={searchTerm} onChange={handleChange} />
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
    );
};

export default Search;