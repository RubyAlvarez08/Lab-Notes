import React, { useState } from "react";
import "../App.css";

function Registro() {
  const [signUp, setSignUp] = useState(true);

  return (
    <div className="form">
      <div>
        <ul className="tab-group"
        onClick={() => setSignUp(!signUp)}>
           {
             signUp ? (
          <li className="tab active">
            <a href="#">Sign Up</a>
          </li>
             )
             : (
              <li className='tab'>
                <a href="#">Log In</a>
              </li>
             )
           }       
        </ul>

        <div className="tab-content">
          <div id="signup">
            <h1>{signUp ? "Sing Up for free" : "Welcome Back"}</h1>
            <form>
              <div className="field-wrap">
                <input type="text" placeholder="Email" required />
              </div>
              <div className="field-wrap">
                <input type="text" placeholder="Password" required />
              </div>
              <button type="submit">{signUp ? "Get Started" : "Log in"}</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Registro;
