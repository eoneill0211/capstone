import React, { useState, useContext } from "react";


const Role = ({val, rolechange}) => {


    const [searchTerm, setSearchTerm] = useState('');
    const handleChange = (e) => {
        setSearchTerm(e.target.value);
        console.log(searchTerm);
    };

    return (
        <><div>
            {<><form className="d-flex" role="search" >

                <input className="form-control me-2" type="search"
                    placeholder="Search" aria-label="Search"
                    value={searchTerm} onChange={handleChange} />

                <button className="btn btn-outline-success" type="submit">Submit</button>
            </form><button onClick={rolechange}>
                    Change Context Value
                </button>
                <button onClick={() => console.log(context)}>
                    Show Context Value
                </button>
                </>
                

            }
        </div><div>
                {<form action="/employee_directory">
                    <input type="submit" value="Employees" />
                </form>}
            </div></>
    )
}


export default Role;
