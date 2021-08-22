import React from 'react';
import {Registration} from "../../src/Auth&Register/register/register";
import {SIGN_UP} from 'apollo/queries';
import Redirect from 'src/shared/Redirect';
import withApollo from "../../hoc/withApollo";
import {RegisterInterfaces} from "../../src/Auth&Register/register/interfaces";
import {useCreateUser} from 'apollo/actions'

const RegUser = () => {
  const [createUser, { data, loading, error }] = useCreateUser(SIGN_UP);
  console.log(data)
  return (
    <div className="d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20">
      <div className="w-lg-500px bg-white rounded shadow-sm p-10 p-lg-15 mx-auto">
              <Registration onSubmit={(registerData: RegisterInterfaces) => createUser({variables: registerData})}/>
              {data && data.createUser && <Redirect to="/cabinet/dashboard"/>}
    </div>
</div>
)
  ;
};

export default  withApollo(RegUser);