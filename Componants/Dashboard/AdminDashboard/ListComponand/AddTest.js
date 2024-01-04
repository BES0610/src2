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
        title: '',
        description: '',
        price: '',
        template_id: '',
        questions: '',
        question_algorithms: '',
        combined_algorithms: '',
        cover_image: ''

        // Add more fields as needed
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
        formDataToSend.append("title",' e.get("title")');
        formDataToSend.append("description", formData.description);
        formDataToSend.append("price", formData.price);
        formDataToSend.append("template_id", formData.template_id);
        formDataToSend.append("questions", formData.questions);
        formDataToSend.append("question_algorithms", formData.question_algorithms);
        formDataToSend.append("combined_algorithms", formData.combined_algorithms);

        axios.post('https://api.twindix.com/dashboard/exams', formDataToSend, {
            headers: {
                Authorization: "Bearer " + localStorage.token,
                "Content-Type": "multipart/form-data",
                maxBodyLength: Infinity,
}
        }).then(res => {
            console.log(res);
        }).catch(error => {
            console.error("Error:", error);
        });
    };


        // End Send Input Value To Server
        // Start Add Test Page

        return (
        <>
            <div className="AddTest">
                <form onSubmit={handleSubmit}>
                <h2>Title Test</h2>
                <input 
                    type="text"
                    name="title"
                    defaultValue={formData.title}
                    onChange={handleChange}
                />
                <h2>Description</h2>
                <input 
                    type="text"
                    name="description"
                    defaultValue={formData.description}
                    onChange={handleChange}
                    />
                <h2>Price</h2>
                <input 
                    type="text"
                    name="price"
                    defaultValue={formData.price}
                    onChange={handleChange}
                    />
                    <br/>
                    <h2>Template Id</h2>
                <input 
                    type="number"
                    name="template_id"
                    defaultValue={formData.template_id}
                    onChange={handleChange}
                    />
                    <br/>
                    <div className="Flex">
                    <div className="DragFiles d-flex flex-column"> 
                        {/* <DNDexcil Drag="Drag Or Choose Qustion File" /> */}
                        Questions
                        <input onChange={handleChange} type="file" name="questions" />
                    </div>
                    <div className="DragFiles d-flex flex-column"> 
                        Question Algorithm
                    <input onChange={handleChange} type="file" name="question_algorithms" />
                        {/* <DNDexcil  Drag="Drag Or Choose Algorithms File" /> */}
                    </div>
                    <div className="DragFiles d-flex flex-column"> 
                    Combined Algorithms
                    <input onChange={handleChange} type="file" name="combined_algorithms" />

                        {/* <DNDexcil Drag="Drag Or Choose Compiled Algorithms File" /> */}
                    </div>

                    </div>
                <br/>
                    <div className="BtnAddTest"  >
                        <Button Text="Create Page" type="submit" />
                    </div>
                </form>
                </div>
        </>
    )
}

export default AddTest 