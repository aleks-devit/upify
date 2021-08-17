import React from 'react';
import {NextPage} from "next";
import { Login } from 'src/Auth&Register/login/login';

const Auth: NextPage = () => {
  return (
    <div className="d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20">
      <div className="w-lg-500px bg-white rounded shadow-sm p-10 p-lg-15 mx-auto">
        <Login/>
      </div>
    </div>
  );
};

export default Auth;