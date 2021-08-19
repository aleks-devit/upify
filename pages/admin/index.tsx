import type {NextPage} from "next";
import Head from 'next/head'
import dynamic from "next/dynamic";
import withApollo from "../../hoc/withApollo";
import withAuthAdmin from "../../hoc/withAuthAdmin";
const CabinetLayout = dynamic(
  () => import('../../src/Cabinet/CabinetLayout/CabinetLayout'),
  {ssr: false}
)

const AdminPanel: NextPage = () => {
  return(
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Description of the main indicators" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CabinetLayout>
        Content
      </CabinetLayout>

    </>
  )
}
export default withApollo(withAuthAdmin(AdminPanel, ['admin']));

