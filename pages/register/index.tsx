import React from 'react';
import {Registration} from "../../src/Auth&Register/register/register";

const RegUser = () => {
  return (
    <div className="d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20">
      <div className="w-lg-500px bg-white rounded shadow-sm p-10 p-lg-15 mx-auto">
    <Registration/>
      </div>
    </div>
  );
};

export default RegUser;