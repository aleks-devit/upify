import type {NextPage} from "next";
import {GetServerSideProps} from 'next'
import Head from 'next/head'
import dynamic from "next/dynamic";
import withApollo from "../../../hoc/withApollo";
import {checkAdmin} from "../../../src/helpers/checkToken";

const CabinetLayout = dynamic(
  () => import('../../../src/Cabinet/CabinetLayout/CabinetLayout'),
  {ssr: false}
)

export const getServerSideProps: GetServerSideProps = async ({req}) => {
  if (!checkAdmin(req.cookies.token)) {
    return {
      redirect: {
        destination: '/admin/login',
        permanent: false,
      },
    }
  }
  return {
    props: {},
  }
}

const AdminPanel: NextPage = () => {
  return(
    <div>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Description of the main indicators" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CabinetLayout>
        Content
      </CabinetLayout>
    </div>
  )
}
export default withApollo(AdminPanel);

