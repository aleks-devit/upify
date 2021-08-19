import React from 'react';
import {Registration} from "../../src/Auth&Register/register/register";
import {Mutation} from 'react-apollo';
import {SIGN_UP} from 'apollo/queries';
import Redirect from 'src/shared/Redirect';
import withApollo from "../../hoc/withApollo";

const RegUser = () => {

  return (
    <div className="d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20">
      <div className="w-lg-500px bg-white rounded shadow-sm p-10 p-lg-15 mx-auto">
        {/*// @ts-ignore*/}
        <Mutation mutation={SIGN_UP}>
          {/*// @ts-ignore*/}
          {(signUpUser, {data, error}) =>
            <>
              <Registration onSubmit={registerData => {
                signUpUser({variables: registerData})
              }}/>
              {/*// @ts-ignore*/}
              {data && data.signUp && <Redirect to="/login" query={{message: 'LOGGED_IN'}}/>}
            </>
          }
      </Mutation>
    </div>
</div>
)
  ;
};

export default  withApollo(RegUser);