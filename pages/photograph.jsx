import Layout from '../components/Layout/Layout'
import Head from 'next/head'
import Container from '../components/Layout/Container'
import PhotoYear from '../components/PhotoYear'

export default function photo() {

  return (
    <Layout isFooter={false} className='pt-10'>
      <Head>
        <title>PhotoGraph</title>
      </Head>
      <Container>
        <PhotoYear/>
      </Container>
    </Layout>
  )
}
