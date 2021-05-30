import React from "react";
import LoginForm from "../components/LoginForm";



import { observer } from 'mobx-react';
import SessionStore from 'mobx-session';
import Search from './Search';

const Login = observer(() => {

  if (SessionStore.initialized) {

    if (!SessionStore.hasSession) {
      return (
        <div className="App">
          <div className="login">
            <LoginForm />
            {/* <Register /> */}
          </div>
        </div>
      );
    }
    else {
      return <Search />;
    }
  }

  return null;
}
);


export default Login;