import axios from "axios";
import { useState } from "react";

const AddTemp = () => {
    let [tempData, setTempData] = useState(null)
    function handleChange(e) {
        
        let {name,value,type} = e.target;
    if(type == "file") {
        setTempData((prevData) => ({
            ...prevData,
            [name]: e.target.files[0],
            }));
    } 
    else setTempData((prevData) => ({ ...prevData, [name] : value}));
    }
    function handleSubmit(e) {
        e.preventDefault();
        let newFormData = new FormData();
        newFormData.append("name", tempData.name);
        newFormData.append("references", tempData.copyContent);
        newFormData.append("html", tempData.html);

        axios.post("https://api.twindix.com/dashboard/templates", newFormData, {headers : {
            Authorization: "Bearer " + localStorage.token
        }}).then(res => console.log(res))
    }
    return (
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} type="text" name="name" placeholder="Template Name" />
            add template excel
            <input onChange={handleChange} type="file" name="copyContent" id="" />
            add html template
            <input onChange={handleChange} type="file" name="html" id="" />
            <button className="btn btn-primary" type="submit">Submit</button>
        </form>
    )
}

export default AddTemp;