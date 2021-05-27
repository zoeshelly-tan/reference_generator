import React ,{useRef} from 'react';
import loginImg from "../../asset/loginImg.png";
import "./style.css";
import API from "../../utils/API"
import {LOADING, LOGIN} from "../../utils/action"
import { useStoreContext } from "../../utils/GlobalState";


class Loginform extends React.Component {
  
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

 
  render(props) {
    return (
      <div className="base-container" ref={this.props.contianerRef}>
        <div className="header">Login</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form" >
            <form className="form-group" onSubmit={handleSubmit}>
              <label htmlFor="usename">Usename</label>
              <input type="text" name="username" placeholder="Username" required ref={usernameRef}/>
            </form>
            <form className="form-group" onSubmit={handleSubmit}>
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="passowrd" required ref = {passwordRef} />
            </form>
          </div>
        </div>
        <div className="footer">
          <button className="btn" type="submit"  onClick={props.handleLogin}>
            Login
        </button>
        </div>
      </div>
    )
  }
}

export default Loginform

