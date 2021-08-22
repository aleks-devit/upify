import {useEffect} from 'react';
import {useRouter} from 'next/router';
import withApollo from 'hoc/withApollo';
import {useGetUser} from 'apollo/actions';
import {checkAdmin} from "../src/helpers/checkToken";

const Logout = ({}) => {
  const router = useRouter();
  const { data: { currentUser } = {}, loading, error } = useGetUser();

  useEffect(() => {
    const token: string | null = localStorage.getItem('token')
    localStorage.setItem('token', '')
    if(checkAdmin(token)){
      router.push('/admin/login');
    }else{
      router.push('/login');
    }

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
