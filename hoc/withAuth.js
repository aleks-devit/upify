
import { useGetUser } from 'apollo/actions';
import Redirect from 'src/shared/Redirect';
import SpinningLoader from 'src/shared/Loader';
import {useRouter} from "next/router";

export default (WrappedComponent, is_admin, options = {ssr: false}) => {
  function WithAuth(props) {
    const {pathname} = useRouter()
    const { data: { currentUser } = {}, loading, error } = useGetUser({fetchPolicy: 'network-only'});

    if(pathname.includes('admin')){
      console.log('admin')
      if (!is_admin  || typeof currentUser === undefined || is_admin !== currentUser?.is_admin) {
          return <Redirect to="/admin/login"/>
        }
        return <WrappedComponent {...props} />
    }else{
      if (!currentUser) {
        return <Redirect to="/login"/>
      }
      return <WrappedComponent {...props} />
    }

    return (
      <div className="spinner-container">
        <SpinningLoader variant="large" />;
      </div>
    )
  }

  if (options.ssr) {
    const serverRedirect = (res, to) => {
      res.redirect(to);
      res.end();
      return {};
    }

    WithAuth.getInitialProps = async (context) => {
      const { req, res } = context;
      if (req) {
        const { user } = req;

        if (!user) {
          return serverRedirect(res, '/login?message=NOT_AUTHENTICATED');
        }

        if (role && !role.includes(user.role)) {
          return serverRedirect(res, '/login?message=NOT_AUTHORIZED');
        }
      }

      const pageProps = WrappedComponent.getInitialProps && await WrappedComponent.getInitialProps(context);
      return {...pageProps};
    }
  }

  return WithAuth;
}
