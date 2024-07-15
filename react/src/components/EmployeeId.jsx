import React, { useState, useEffect, useContext } from "react";




const EmployeeId = (props) => {

  const [employeeData, setEmployeeData] = useState([]);

  //get a specific employee's data

  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        const lastItem = window.location.href.substring(window.location.href.lastIndexOf('/') + 1)
        const response = await fetch("http://localhost:3000/employee_directory/" + lastItem);

        if (!response.ok) {
          throw new Error('Data could not be fetched!');
        }
        const json_response = await response.json();
        setEmployeeData(json_response);
        console.log(employeeData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchEmployeeData();
  }, [employeeData]);



  console.log("We are here");

  //used to search for specific employee, see first div

  const [searchTerm, setSearchTerm] = useState('');
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    console.log(searchTerm);
  };

  if (employeeData[0]) {

    return (




      <><div>
        <form className="d-flex" role="search" action={'/employee_directory/' + searchTerm}>
          <input className="form-control me-2" type="search"
            placeholder="Search" aria-label="Search"
            value={searchTerm} onChange={handleChange} />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
        <div className="col">
          <h1>{employeeData[0].result.name.first + " " + employeeData[0].result.name.last}'s Information</h1>
          <ul>
            {<li>{"Name: " + employeeData[0].result.name.first + " " + employeeData[0].result.name.last}</li>}
            {<li>{"Username: " + employeeData[0].result.username}</li>}
            {<li>{"Phone Number: " + employeeData[0].result.phoneNumber}</li>}
            {<li>{"Role: " + employeeData[0].result.job}</li>}
            {<li>{"Location: " + employeeData[0].result.location.state}</li>}
            {<li>{"Salary: " + employeeData[0].result.salary * 100}</li>}
          </ul>
          {<form action="/employee_directory">
            <input type="submit" value="Back" />
          </form>}
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
      return <p>No employee data found</p>
    }
  }

  render();

  //return render()
};
export default EmployeeId;