import type {NextPage} from 'next'
import Head from 'next/head'
import Home from "../src/Home/Home";


const HomePage: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Description of the main indicators" />
      </Head>
      <Home>

      </Home>
    </div>
  )
}



export default HomePage
