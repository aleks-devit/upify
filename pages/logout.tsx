import { useEffect } from 'react';
import { useRouter } from 'next/router';
import withApollo from 'hoc/withApollo';
import {useGetUser, useSignOut } from 'apollo/actions';

const Logout = ({apollo}) => {
  const [signOut] = useSignOut();
  const router = useRouter();
  const { data: { currentUser } = {}, loading, error } = useGetUser();

  useEffect(() => {
    // localStorage.setItem('token', '')
    // if(currentUser.is_admin){
    //   router.push('/admin/login');
    // }else{
    //   router.push('/login');
    // }

  }, [])

  return (
    <>
      <div className="bwm-form mt-5">
        <div className="row">
          <div className="col-md-5 mx-auto">
            <h1 className="page-title">Logout</h1>
            <p>Signing out...</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default withApollo(Logout);
