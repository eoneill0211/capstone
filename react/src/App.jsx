import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Employees from './components/Employees'
import EmployeeId from './components/EmployeeId'
import Search from './components/Search'
import { Context } from './components/Context'
import {
  BrowserRouter,
  Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import './App.css'


function App() {
  const [context, setContext] = useState(2);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_SOCKS_API_URL);

        if (!response.ok) {
          throw new Error('Data could not be fetched!');
        }
        const json_response = await response.json();
        setData(json_response); // assign JSON response to the data variable.
      } catch (error) {
        console.error('Error fetching socks:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <BrowserRouter>

      <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
        <div className="container-fluid">
          <div className="row">
            <Context.Provider value={[context, setContext]}>

              <Routes>

                <Route path="/employee_directory" element={<Employees />} />
                <Route path="/employee_directory/:id" element={<EmployeeId />} />

              </Routes>
            </Context.Provider>

          </div>
        </div>
      </main>
    </BrowserRouter>
  )
}

export default App
