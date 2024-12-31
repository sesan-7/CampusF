// Login.jsx
// import React from "react";

function Login() {
  return (
    <div className="login">
      <h1>Login</h1>
      <form action="">
        <div className="imgcontainer">
          <img src="assets/avatar.png" alt="Avatar" className="avatar" />
        </div>
        <div className="inputs">
          <label htmlFor="email">email</label>
          <input type="text" id="email" placeholder="email" />
          <br />
          <label htmlFor="psw">password</label>
          <input type="password" placeholder="password" id="psw" />
          <br />
          <a href="#" id="forget">Forget Password?</a>
        </div>
        <button type="submit">login</button>
      </form>
    </div>
  );
}

export default Login;
