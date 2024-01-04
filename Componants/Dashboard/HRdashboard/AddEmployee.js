import axios from "axios";
import { useState } from "react";

const AddEmployee = () => {
    const [userData, setUserData] = useState()
    function handleSubmit(e) {
        e.preventDefault();
        console.log(e.target[0].value)
        setUserData({name: e.target[0].value, email: e.target[1].value})
        axios.post("https://api.twindix.com/employees", userData, {headers:{
            Authorization: "Bearer " + localStorage.token
        }}
    ).then((res) => console.log(res))
    }

    return (
        <div>
            Add Employee
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" required/>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" required/>
                <button type="submit">Create Employee</button>
            </form>
        </div>
    )
}

export default AddEmployee;