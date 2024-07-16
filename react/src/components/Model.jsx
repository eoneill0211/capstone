//import { response } from 'express';
import React, { useState } from 'react';
import cors from 'cors';
//Model.use(cors());

const Model = () => {

    const [state, setState] = useState('');
    const [job, setJob] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            state: state,
            job: job
        };

        fetch('http://127.0.0.1:5000/api/predict', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
    .catch((error) => {
        console.error('Error:', error);
    });

        
    };

    return (
        <form onSubmit = {handleSubmit}>
            <label htmlFor='dropdown1'>Sel Op1</label>
                <select id = "dropdown1" value={state} onChange = {(e) => setState(e.target.value)}>

                    <option value = ""> Select an option</option>
                    <option value = "Georgia">Georgia</option>



                </select>

                <label htmlFor='dropdown2'>Sel Op1</label>
                <select id = "dropdown2" value={job} onChange = {(e) => setJob(e.target.value)}>

                    <option value = ""> Select an option</option>
                    <option value = "Job1">Job</option>



                </select>
                <button type = "submit"> Submit</button>



        </form>


    );




};

export default Model;



// import React, { useState, useEffect } from "react";

// const Model = (props) => {

//     const [employeeData, setEmployeeData] = useState([]);

//     //grab employee data
//     useEffect(() => {
//         const fetchEmployeeData = async () => {
//             try {
//                 fetch('http://localhost:3000/employee_directory', {
//                   method: 'POST', // Specify the HTTP method
//                   body: new FormData(document.querySelector('MenuSearching')) // Collect form data
//                 })
//                   .then(response => response.text()) // Read response as text
//                   .then(data => alert(data)); // Alert the response
//               } catch (error) {
//                 console.log(body);
//                 //alert('An error occurred!');
//               }
//         };
//         fetchEmployeeData();
//     }, [employeeData]);

//     //used to search for specific employee, see first div
//     const [searchTerm, setSearchTerm] = useState('');
//     const handleChange = (e) => {
//         setSearchTerm(e.target.value);
//         console.log(searchTerm);
//     };


//     console.log("We are here");
//     if (employeeData.length > 1) {
//         return (

//             <><><div class="MenuSearching" id="Searching">
//                 <form action="/employee_directory" method="post">
//                     <div class="Menu1" id="Menu1">
//                         <p>State</p>
//                         <div >
//                             <select name="State" autofocus required id="State">
//                                 <option value="Connecticut" selected="selected">Connecticut-</option>
//                                 <option value="Minnesota">Minnesota</option>
//                                 <option value="Georgia">Georgia</option>
//                             </select>
//                         </div>



//                     </div>

//                     <div class="Menu2" id="Menu2">
//                         <div>
//                             <select name="Job" autofocus required id="Job">
//                                 <option value="Central Applications Administrator" selected="selected">Central Applications Administrator</option>
//                                 <option value="Job2">E2</option>
//                                 <option value="Job3">E3</option>
//                             </select>
//                         </div>
//                     </div>
//                     <div>
//                         <input name="submitbutton" type="submit" id="submitbutton" formmethod="POST" value="search" />
//                     </div>
//                 </form>
//             </div></></>
//         );
//     }

//     const render = () => {
//         if (props.length > 0) {
//             return <ul className="link-list">{linkMarkup}</ul>;
//         } else {
//             return <p>No employee data found</p>
//         }
//     }

//     return render()
// };
// export default Model;
