import { useState, useEffect, useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Employees from './components/Employees'
import EmployeeId from './components/EmployeeId'
import Search from './components/Search'
import Role from './components/Role'

import {
  BrowserRouter,
  Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import './App.css'


function App() {



  const [data, setData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(import.meta.env.VITE_SOCKS_API_URL);

  //       if (!response.ok) {
  //         throw new Error('Data could not be fetched!');
  //       }
  //       const json_response = await response.json();
  //       setData(json_response); // assign JSON response to the data variable.
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);


  return (

      <BrowserRouter>
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
          <div className="container-fluid">
            <div className="row">

              <Routes>
                <Route path="/" element={<Role />} />

                <Route path="/employee_directory" element={<Employees />} />
                <Route path="/employee_directory/:id" element={<EmployeeId />} />
                {/* <Route path="/add" element={<AddEmployee />} /> */}


              </Routes>
            </div>
          </div>
        </main>
      </BrowserRouter>

  )
}


export default App
