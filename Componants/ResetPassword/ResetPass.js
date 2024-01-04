import React, { useState } from 'react';
import Header from  "../../FemilerCom/Header/Header"
import validator from 'validator';
function ResetPassword ()  {
  const [email, setEmail] = useState('');
  const [resetSent, setResetSent] = useState(false);
  const [error, setError] = useState();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleResetSubmit = async (event) => {
    event.preventDefault();
if(validator.isEmail(email)) {
  try {
    const response = await fetch('https://api.twindix.com/auth/forgot-password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();
    console.log(data)
    if (response.ok) {
      setResetSent(true);
    } else {
      // Handle error, show message to the user
      console.error('Error:', data.error);
    }
  } catch (error) {
    console.error('Error:', error);
  }
} else {
  setError("make sure the email is valid");
}
    // Call your backend API to initiate the password reset process
    
  };

  return (
    <>
    <Header />
    {error ? <div style={{left: "50%",
    transform: "translate(-50%)"}} className='alert alert-danger position-absolute top-0 text-center '>
      {error}
    </div> : ""}
    <div className="LogInBoxAdmin">
    <div className="LogInForAdminText">
        <h1 className="H1tex">Reset Password</h1>
    </div>
    {resetSent ? (
      <div className='alert alert-success'>Password reset instructions sent to your email.</div>
    ) :
    (
      <form className="SupmitForm" action="" onSubmit={handleResetSubmit}>
      <div className="InptCont">
              <div className="ImgAndTilte">
                  <img className="ImgeInput" src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png" alt="ss" />
                  <div className="title">Email</div>
                  <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                    className='RegInput'
                  />                        
                  </div>
          </div>
              <div className="LogInForAdminBtns">
                  <div  id="HR" className="Contaner">
                      <button type="submit" className="RegsBTN" >Send</button>
                      <img className="Arrow" src="https://cdn-icons-png.flaticon.com/512/271/271226.png" alt="Icon" /> 
                  </div>
              </div>
      </form>
    )}
</div> 
    </>

  );
};

export default ResetPassword;
