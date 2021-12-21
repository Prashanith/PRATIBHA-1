import React from "react";
// import Button from "../global_ui/buttons/button";
import "./loginPage.css";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function LoginPage() {
  const { signInWithGoogle,currentUser }=useAuth();

  return currentUser===null?(
    <div className="loginPage">
      <div className="logos">
        <img alt="abhyas" className="abhyas" src="/abhyasLogo.jpg"/>
        <img alt="loading" className="vbit" src="/vbit.png" />
        <img alt="loading" className="cs_logo" src="/cs_logo.png" />      
      </div>

      {/* <p>{JSON.stringify(currentUser)}</p> */}

      <div className="row">

          <div className="button-and-icon">
            <i className="fas fa-user-circle icons"></i>
            <button
             className="loginBtn"
             onClick={signInWithGoogle}

            >
              Login as Student
            </button>
          </div>
          <div className="button-and-icon">
            <i className="fas fa-graduation-cap icons "></i>

            <button
              className="loginBtn"
              onClick={signInWithGoogle}
            >
              Login as Faculty
            </button>
          </div>
      </div>

    </div>
  ):<Navigate to="/home" />;
}


// const validateMail = (result) => {
//   if (/@vbithyd.ac.in\s*$/.test(result.user.email)) {
//     console.log("it ends in @vbithyd.ac.in");

//     if (/^[1-9]/.test(result.user.email)) {
//       User = {
//         email: result.user.email,
//         name: result.user.displayName,
//         role: ["student"],
//         rollno: result.user.email.substr(0, 10),
//       };
//       console.log("it starts with num");
//     } else {
//       User = {
//         email: result.user.email,
//         name: result.user.displayName,
//         role: ["faculty"],
//       };
//     }
//   } else if (/@gmail.com\s*$/.test(result.user.email)) {
//     console.log("it ends in @gmail");
//   }
// };
