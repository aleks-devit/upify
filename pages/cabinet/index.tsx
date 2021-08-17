import type {NextPage} from 'next'
import Head from 'next/head'
import dynamic from "next/dynamic";

const CabinetLayout = dynamic(
  () => import('../../src/Cabinet/CabinetLayout/CabinetLayout'),
  {ssr: false}
)


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

export default CabinetPage
