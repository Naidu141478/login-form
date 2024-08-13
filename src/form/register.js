import React from 'react'

const Register = () => {
  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign Up</div>
   
    <div className="form">
      <form>
      <div className="input-container">
          <label>Name </label>
          <input type="text" name="name" required />
        </div>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
        <div>
            <h6>Already Have An Account?<span><a href="/">Signin</a></span></h6>
        </div>
      </form>
    </div>
    </div>
    </div>
  )
}

export default Register;