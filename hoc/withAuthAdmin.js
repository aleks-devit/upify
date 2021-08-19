
import {useGetAdmin, useGetUser} from 'apollo/actions';
import Redirect from 'src/shared/Redirect';
import SpinningLoader from 'src/shared/Loader';

export default (WrappedComponent, role, options = {ssr: false}) => {
  function WithAuthAdmin(props) {
    const { data: { admin } = {}, loading, error } = useGetAdmin({fetchPolicy: 'network-only'});
    console.log(admin)
    if (
      !loading &&
      (!admin || error) &&
      typeof window !== 'undefined'
    ) {
      return <Redirect to="/admin/login" query={{message: 'NOT_AUTHENTICATED'}} />
    }

    // TODO: Send a message to login page
    if (admin) {

      if (role && !role.includes(admin.role)) {
        return <Redirect to="/admin/login" query={{message: 'NOT_ADMIN_2_AUTHORIZED'}}/>
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

    WithAuthAdmin.getInitialProps = async (context) => {
      const { req, res } = context;
      if (req) {
        const { admin } = req;

        if (!admin) {
          return serverRedirect(res, '/login?message=NOT_AUTHENTICATED');
        }

        if (role && !role.includes(admin.role)) {
          return serverRedirect(res, '/login?message=NOT_ADMIN_1_AUTHORIZED');
        }
      }

      const pageProps = WrappedComponent.getInitialProps && await WrappedComponent.getInitialProps(context);
      return {...pageProps};
    }
  }

  return WithAuthAdmin;
}
