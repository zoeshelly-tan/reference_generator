import React, { useState } from 'react';
// import { useHistory } from "react-router-dom";
import UserStore from '../../stores/UserStore';

import "./style.css";
// import API from "../../utils/API"


function Loginform() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("")
  // const history = useHistory();

  // const handleLogin = async (e) => {
  //   e.preventDefault();
  //   // console.log(email);
  //   // console.log(password);
  //   if (username && password) {
  //     const response = await fetch('http://localhost:3001/login', {
  //       method: 'POST',
  //       body: JSON.stringify({ username, password }),
  //       headers: { 'Content-Type': 'application/json' },
  //     });
  //     if (response.ok) {
  //       // If successful, redirect the browser to the profile page
  //       history.push('/biliography');
  //     } else {
  //       console.log(response);
  //     }
  //   }

  // }
  // usernameRef = useRef();
  // passwordRef = useRef();
  // state = useStoreContext();
  // dispatch = useStoreContext();

  // handleSubmit = e => {
  //   e.preventDefault();
  //   dispatch({ type: LOADING });
  //   API.login({
  //     username: usernameRef.current.value,
  //     password: passwordRef.current.value,
  //   })
  //     .then(result => {
  //       dispatch({
  //         type: LOGIN,
  //         post: result.data
  //       });
  //     })
  //     .catch(err => console.log(err));

  //   usernameRef.current.value = "";
  //   passwordRef.current.value = "";
  // };



  return (
    <div className="base-container" >
      <div className="header">Login</div>
      <div className="content">
        {/* <div className="image">
            <img src={loginImg} />
          </div> */}
        <div className="form" >
          <form className="form-group" >
            <label htmlFor="usename">Usename</label>
            <input type="text" name="username" placeholder="Username" value={username} onChange={(e) => setusername(e.target.value)} />
          </form>
          <form className="form-group" >
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="password" value={password} onChange={(e) => setpassword(e.target.value)} />
          </form>
        </div>
      </div>
      <div className="footer">
        <button className="btn" type="submit" onClick={() => UserStore.login({ username, password })}>
          Login
        </button>
      </div>
    </div>
  )
}


export default Loginform

