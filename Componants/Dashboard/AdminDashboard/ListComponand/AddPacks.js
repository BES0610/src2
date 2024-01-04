import {  useState } from "react"
import { Link } from "react-router-dom"
import "./ListCom.css"
import Button from "../../../../FemilerCom/Button/Button";
import DNDexcil from "../../../../FemilerCom/DNDexcil/DNDexcil"
import axios from "axios";
import validator from "validator";
function validateInputs() {

}
function AddTest () {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        exams_count: '',
        exam_id: '',
    });
    
    const handleChange = (e) => {
        const { name, value, type } = e.target;
        if(type === "file") {
            setFormData((prevData) => ({
                ...prevData,
                [name]: e.target.files[0],
                }));
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
                }));
        }

    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const formDataToSend = new FormData();

        formDataToSend.append("name", formData.name);
        formDataToSend.append("description", formData.description);
        formDataToSend.append("price", formData.price);
        formDataToSend.append("exam_id", formData.exam_id);
        formDataToSend.append("exams_count", formData.exams_count);


        axios.post('https://api.twindix.com/dashboard/packages', formDataToSend, {
            headers: {
                Authorization: "Bearer " + localStorage.token,
                "Content-Type": "multipart/form-data"
            }
        }).then(res => console.log(res))
    };


        // End Send Input Value To Server
        // Start Add Test Page

        return (
        <>
            <div className="AddTest">
                <form onSubmit={handleSubmit}>
                <h2>Name</h2>
                <input 
                    type="text"
                    name="name"
                    onChange={handleChange}
                />
                <h2>Description</h2>
                <input 
                    type="text"
                    name="description"
                    onChange={handleChange}
                    />
                <h2>Price</h2>
                <input 
                    type="text"
                    name="price"
                    onChange={handleChange}
                    />
                    <br/>
                    <h2>Exam Id</h2>
                <input 
                    type="number"
                    name="exam_id"
                    onChange={handleChange}
                    />
                    <br/>
                    <h2>Exams Count</h2>

                <input 
                    type="number"
                    name="exams_count"
                    onChange={handleChange}
                    />
                    <br/>

                <br/>
                    <div className="BtnAddTest" type="submit" >
                        <Button Text="Create Package" />
                    </div>
                </form>
                </div>
        </>
    )
}

export default AddTest 