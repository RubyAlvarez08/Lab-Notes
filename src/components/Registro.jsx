import React, { useState, useHistory } from "react";
import "../App.css";
import { auth } from "../firebase.js";

function Registro() {
  
  const [signUp, setSignUp] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  /* let history = useHistory(); */
  
const registrar= async (e) => {
 
    e.preventDefault();
    try {
      const response = await auth.createUserWithEmailAndPassword(email, password);
      console.log(response.user);
     /* history.push('/notes') */
      
    } catch (error) {
      console.log(error);

      if (error.code === "auth/email-already-in-use") {
        console.log("Usuario ya registrado...");
        return;
      }
      if (error.code === "auth/invalid-email") {
        console.log("Email no válido");
        return;
      }
    }
  }
 

  return (
    <div className="form">
      <div>
        <ul className="tab-group" onClick={() => setSignUp(!signUp)}>
          {signUp ? (
            <li className="tab active">
              <a href="#">Sign Up</a>
            </li>
          ) : (
            <li className="tab">
              <a href="#">Log In</a>
            </li>
          )}
        </ul>

        <div className="tab-content">
          <div id="">
            <h1>{signUp ? "Sing Up for free" : "Welcome Back"}</h1>
            <form onSubmit={registrar}>
              <div className="field-wrap">
                <input
                  type="text"
                  placeholder="Email"
                   onChange={e => setEmail(e.target.value)}
                   value={email}
                  required
                />
              </div>
              <div className="field-wrap">
                <input
                  type="password"
                  placeholder="Password"
                  onChange={e => setPassword(e.target.value)}
                  value={password}
                  required
                />
              </div>
              <button type="submit">
                
                {signUp ? "Get Started" : "Log in"}

              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Registro;
