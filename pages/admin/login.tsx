import React from 'react';
import {NextPage} from "next";
import Login from 'src/Auth&Register/login/login';
import withApollo from 'hoc/withApollo';
import {useSignInAdmin} from 'apollo/actions';
import Redirect from 'src/shared/Redirect';
import {LoginInterfaces} from "../../src/Auth&Register/login/interfaces";
import {ApolloError} from 'apollo-client';
import errorMessage from "../../src/helpers/errorMessages";


const AuthAdmin: NextPage = () => {
  const [signInAdmin, {data, loading, error}] = useSignInAdmin();

  if (data) {
    localStorage.setItem('token', data.adminLogin.token)
  }

  return (
    <div className="d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20">
      <div className="w-lg-500px bg-white rounded shadow-sm p-10 p-lg-15 mx-auto">
        <Login
          loading={loading}
          onSubmit={(signInData: LoginInterfaces) => signInAdmin({variables: signInData})} />
        { data && data.adminLogin && <Redirect to="/admin/dashboard"/> }
        { error && <div className="alert alert-danger">{errorMessage(error)}</div>}
      </div>
    </div>
  );
};

export default withApollo(AuthAdmin);