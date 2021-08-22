import type {NextPage} from 'next'
import Head from 'next/head'
import dynamic from "next/dynamic";
import withApollo from "../../../hoc/withApollo";
import {GetServerSideProps} from "next";
import {checkAdmin} from "../../../src/helpers/checkToken";

const CabinetLayout = dynamic(
  () => import('../../../src/Cabinet/CabinetLayout/CabinetLayout'),
  {ssr: false}
)

export const getServerSideProps: GetServerSideProps = async ({req}) => {
  if (checkAdmin(req.cookies.token) || !req.cookies.token) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }
  return {
    props: {},
  }
}

const CabinetPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Description of the main indicators"/>
      </Head>

      <CabinetLayout>
       Content
      </CabinetLayout>
    </div>
  )
}

export default withApollo(CabinetPage)
