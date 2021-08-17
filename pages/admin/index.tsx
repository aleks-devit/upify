import type {NextPage} from "next";
import Head from 'next/head'
import dynamic from "next/dynamic";
const CabinetLayout = dynamic(
  () => import('../../src/Cabinet/CabinetLayout/CabinetLayout'),
  {ssr: false}
)

const Dashboard: NextPage = () => {
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

export default Dashboard
