import React, { useState } from "react";
import "../App.css";
import { auth } from "../firebase.js";

function Registro(props) {
  
  const [signUp, setSignUp] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null)
  

const registrar= async (e) => {
    
    e.preventDefault();
    try {
      const response = await auth.createUserWithEmailAndPassword(email, password);
      console.log(response.user);
      setEmail('')
      setPassword('')
      setError(null)
     props.history.push('/notes')
      
    } catch (error) {
      
      if (error.code === "auth/email-already-in-use") {
        setError("Usuario ya registrado...");
        return;
      }
      if (error.code === "auth/invalid-email") {
        setError("Email no válido");
        return;
      }
    }
  }
  
  const login = async(e) => {
    e.preventDefault();
    try{
      await auth.signInWithEmailAndPassword(email, password) 
      setEmail('')
      setPassword('')
      setError(null)
      props.history.push('/notes')
    }catch (error) {
      if(error.code === 'auth/user-not-found' ) {
          setError('Usuario o contraseña incorrecta')
      }
      if(error.code === 'auth/wrong-password'){
          setError('Usuario o contraseña incorrecta')
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
            <form>
            {
                error ? (
                    <div className="alert alert-danger">
                        {error}
                    </div>
                ) : null
            }
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
              <button type="submit" onClick={signUp ?registrar :login}>
                
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
