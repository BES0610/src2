import axios from "axios"
import { useEffect, useState, useContext } from "react"
import { appContext } from "../../../../App";
function Differentiformoation () {
    let [userInfo, setUserInfo] = useState(null);
    let {userData} = useContext(appContext);
    let [sentData, setSentData] = useState({"name":"", "password": "","password-confirmation": "", "company_name":"", "job_title":"","phone":""});
    useEffect(() => {
        if(!userInfo) {
            axios.get("https://api.twindix.com/auth/me", {headers: {
                Authorization: "Bearer " + localStorage.token
            }}).then((res) => {
                setUserInfo(res.data.payload);
            })
        }
    }, [userInfo])
    const handleChange = (e) => {
      const { name, value, type } = e.target;
      setSentData((prevData) => ({
              ...prevData,
              [name]: value,
              }));
  };
    function handleSubmit(e) {
      e.preventDefault();
      console.log(e.target["email"].value)
      console.log(e.target["name"].value)
      console.log(e.target["password"].value)
      console.log(e.target["password_confirmation"].value)
      console.log(e.target["job_title"].value)
      console.log(e.target["company_name"].value)
      console.log(e.target["phone"].value)
      let data = new FormData();
      data.append('name', e.target["name"].value);
      data.append('email', e.target["email"].value);
      data.append('phone', e.target["phone"].value);
      data.append('username', e.target["username"].value);
      data.append('job_title',e.target["job_title"].value);
      data.append('company_name', e.target["company_name"].value);
      data.append('password', sentData.password);
      data.append('password_confirmation', sentData["password_confirmation"]);
      
      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://api.twindix.com/auth/me',
        headers: { 
          'Authorization': 'Bearer ' + localStorage.token, 
         },
        data : sentData
      };
      
      axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
      
    }
    return (
        <>
            <div classNameName="container">
              {userInfo ? 
                          <form onSubmit={handleSubmit}>
                          <div className="form-row">
                          <div className="form-group col-md-6">
                              <label for="inputEmail4">Name</label>
                              <input  onChange={handleChange} type="text" name="name" className="form-control" defaultValue={userData.name} id="inputEmail4" placeholder="Email"/>
                            </div>
                            <div className="form-group col-md-6">
                              <label for="email">Email</label>
                              <input onChange={handleChange} type="email" name="email" className="form-control" defaultValue={userData.email} id="email" placeholder="Email"/>
                            </div>
                            <div className="form-group col-md-6">
                              <label for="inputPassword4">Password</label>
                              <input onChange={handleChange} type="password" name="password" className="form-control" id="password" placeholder="Password" required/>
                            </div>
                            <div className="form-group col-md-6">
                              <label for="inputPassword4">Confirm Password</label>
                              <input onChange={handleChange} type="password" required name="password_confirmation" className="form-control" id="password_confirmation" placeholder="Password"/>
                            </div>
                          </div>
                        
                          <div className="form-group">
                            <label for="phone">Phone</label>
                            <input onChange={handleChange} type="number" name="phone" className="form-control" defaultValue={userData.phone ? userData.phone : ""} id="phone" placeholder="phone number"/>
                          </div>
                          <div className="form-group col-md-6">
                              <label for="inputEmail4">Company Name</label>
                              <input onChange={handleChange} type="text" name="company" className="form-control" defaultValue={userData.company ? userData.company : ""} id="company" placeholder="Company Name.."/>
                            </div>
                            <div className="form-group col-md-6">
                              <label for="inputEmail4">Job Title</label>
                              <input onChange={handleChange} type="text" name="job_title" className="form-control" defaultValue={userData.job ? userData.job_title : ""} id="job_title" placeholder="Job Title"/>
                            </div>
                          {/* <div className="form-row"> */}
                        
                            {/* <div className="form-group col-md-4">
                              <label for="inputState">State</label>
                              <select id="inputState" className="form-control">
                                <option selected>Choose...</option>
                                <option>...</option>
                              </select>
                            </div> */}
                        
                          {/* </div> */}
                        
                          <button type="submit" className="btn btn-primary">Sign in</button>
                        </form>
              : "no data or internet proplem"}

            </div>
        </>
    )
}

export default Differentiformoation