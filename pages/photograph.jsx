import Layout from '../components/Layout/Layout'
import Head from 'next/head'
import Container from '../components/Layout/Container'
import PhotoYear from '../components/PhotoYear'
import { getAllPosts } from '../lib/api'
import { useEffect } from 'react'
export default function PhotoGraph({ allPosts }) {
  const heroPost = allPosts;
  useEffect(() => {
    console.log(heroPost);
  })
  return (
    <Layout isFooter={false} className='pt-10'>
      <Head>
        <title>PhotoGraph</title>
      </Head>
      <Container>
        <PhotoYear post={allPosts}/>
      </Container>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}