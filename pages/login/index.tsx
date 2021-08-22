import React from 'react';
import {NextPage} from "next";
import Login from 'src/Auth&Register/login/login';
import { useEffect, useRef } from 'react';
import withApollo from 'hoc/withApollo';
import { useSignIn } from 'apollo/actions';
import { useRouter } from 'next/router';
import Redirect from 'src/shared/Redirect';
import {LoginInterfaces} from "../../src/Auth&Register/login/interfaces";
import errorMessage from "../../src/helpers/errorMessages";


const Auth: NextPage = () => {
  const [ signIn, {data, loading, error}] = useSignIn();

  return (
    <div className="d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20">
      <div className="w-lg-500px bg-white rounded shadow-sm p-10 p-lg-15 mx-auto">
        <Login
          loading={loading}
          onSubmit={(signInData: LoginInterfaces) => signIn({variables: signInData})}
        />
        { data && data.login && <Redirect to="/cabinet/dashboard"/> }
        { error && <div className="alert alert-danger">{errorMessage(error)}</div>}
      </div>
    </div>
  );
};

export default withApollo(Auth);