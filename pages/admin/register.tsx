import {Registration} from "../../src/Auth&Register/register/register";
import {Mutation} from 'react-apollo';
import {SIGN_UP_ADMIN} from 'apollo/queries';
import Redirect from 'src/shared/Redirect';
import withApollo from "../../hoc/withApollo";

const RegAdmin = () => {

  return (
    <div className="d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20">
      <div className="w-lg-500px bg-white rounded shadow-sm p-10 p-lg-15 mx-auto">
        {/*// @ts-ignore*/}
        <Mutation mutation={SIGN_UP_ADMIN}>
          {/*// @ts-ignore*/}
          {(signUpAdmin, {data, error}) =>
            <>
              <Registration onSubmit={registerData => {
                signUpAdmin({variables: registerData})
              }}/>
              {/*// @ts-ignore*/}
              {data && data.signUpAdmin && <Redirect to="/admin" query={{message: 'LOGGED_IN'}}/>}
            </>
          }
        </Mutation>
      </div>
    </div>
  )
    ;
};

export default  withApollo(RegAdmin);