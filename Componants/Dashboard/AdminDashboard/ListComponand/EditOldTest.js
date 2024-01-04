import {  useEffect, useState } from "react"
import { Link, redirect, useLocation, useNavigate } from "react-router-dom"
import "./ListCom.css"
import Button from "../../../../FemilerCom/Button/Button";
import DNDexcil from "../../../../FemilerCom/DNDexcil/DNDexcil"
import axios from "axios";
import validator from "validator";
function validateInputs() {

}
function EditOldTest () {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        price: '',
        template_id: '',
        questions: '',
        question_algorithms: null,
        combined_algorithms: null,
        cover_image: null,
        exam_id: null

        // Add more fields as needed
    });
    function handleSelect(e) {
       const {value} = e.target;
       setCurrentExam(value);
       setFormData(exams[currentExam]);

    }
    const [exams, setExams] = useState(null);
    const [updateFiles, setUpdateFiles] = useState(null);
    const [currentExam, setCurrentExam] = useState(true);
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
        console.log(formData)
        const formDataToSend = new FormData();
        formDataToSend.append("title", formData.title);
        formDataToSend.append("description", formData.description);
        formDataToSend.append("price", formData.price);
        formDataToSend.append("template_id", formData.template_id);
        // formDataToSend.append("questions", formData.questions);
        // formDataToSend.append("question_algorithms", formData.question_algorithms);
        // formDataToSend.append("combined_algorithms", formData.combined_algorithms);
        // formDataToSend.append("cover_image", formData.cover_image);

        if(formData.questions) {
            formDataToSend.append("questions", formData.questions);
        }
        if(formData.question_algorithms) {
            formDataToSend.append("question_algorithms", formData.question_algorithms);
        }
        if(formData.combined_algorithms) {
            formDataToSend.append("combined_algorithms", formData.combined_algorithms);
        }
        if(formData.cover_image) {
            formDataToSend.append("cover_image", formData.cover_image);
                        }

        // axios.put('https://api.twindix.com/dashboard/exams/' + sessionStorage.editId, formDataToSend, {
        //     headers: {
        //         Authorization: "Bearer " + localStorage.token,
        //         "Content-Type": "multipart/form-data"
        //     }, maxBodyLength: Infinity
        // }).then(res => {console.log(res); sessionStorage.removeItem("editId") ;redirect("/admin")}).catch(error => {
        //     console.error('Error:', error);
        //     if (error.response) {
        //         console.error('Response data:', error.response.data);
        //     }
        // });
        fetch("https://api.twindix.com/dashboard/exams/"+ sessionStorage.editId, {headers: {
            Authorization: "Bearer "+ localStorage.token
        }, body: formDataToSend, method: "PUT"}).then(res => console.log(res))
    };

        useEffect(() => {
            if(!exams && sessionStorage.editId) {
                axios.get("https://api.twindix.com/dashboard/exams/" + sessionStorage.editId, {headers: {
                    Authorization: "Bearer " + localStorage.token
                }}).then(res => {
                    setExams(res.data.payload.data);
                }
                    )
                
                console.log("done")
            }

        }, [exams])
        // End Send Input Value To Server
        // Start Add Test Page

        return (
        <>
            <div className="AddTest">
                <form onSubmit={handleSubmit}>
                <h2>Title Test</h2>
                {/* <select onChange={handleSelect} name="exam_id">
                <option value="0">Select a test</option>
                    {exams ? exams.map((exam) => {
                        return <option value={exam.id} key={exam.id}>{exam.title}</option>
                    }) : <option >no exams</option>}
                </select> */}
                <h2>Title Test</h2>
                <input 
                    type="text"
                    name="title"
                    defaultValue={exams && exams.title ? exams.title : ""}
                    onChange={handleChange}
                    onLoad={handleChange}
                />
                <h2>Description</h2>
                <input 
                    type="text"
                    name="description"
                    defaultValue={exams && exams.description ? exams.description : ""}
                    onChange={handleChange}
                    />
                <h2>Price</h2>
                <input 
                    type="text"
                    name="price"
                    defaultValue={exams ? exams.price : ""}
                    onChange={handleChange}
                    />
                    <br/>
                    <h2>Template Id</h2>
                <input 
                    type="number"
                    name="template_id"
                    defaultValue={exams ? exams.template_id : ""}
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
                    <div className="DragFiles d-flex flex-column"> 
                    Cover Image
                    <input onChange={handleChange} type="file" name="cover_image" />

                        {/* <DNDexcil Drag="Drag Or Choose Compiled Algorithms File" /> */}
                    </div>
                    </div>
                <br/>
                    <div className="BtnAddTest" type="submit" >
                        <Button Text="Edit Test" />
                    </div>
                </form>
                </div>
        </>
    )
}

export default EditOldTest 