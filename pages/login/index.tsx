import React from 'react';
import {NextPage} from "next";
import Login from 'src/Auth&Register/login/login';
import { useEffect, useRef } from 'react';
import withApollo from 'hoc/withApollo';
import { useSignIn } from 'apollo/actions';
import { useRouter } from 'next/router';
import Redirect from 'src/shared/Redirect';


const Auth: NextPage = () => {
  const [ signIn, {data, loading, error}] = useSignIn();
  const router = useRouter();

  return (
    <div className="d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20">
      <div className="w-lg-500px bg-white rounded shadow-sm p-10 p-lg-15 mx-auto">
        <Login
          loading={loading}
          onSubmit={(signInData) => signIn({variables: signInData})}
        />
        { data && data.signIn && <Redirect to="/"/> }
      </div>
    </div>
  );
};

export default withApollo(Auth);