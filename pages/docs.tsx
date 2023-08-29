import Container from '../components/container'
import MoreStories from '../components/more-docs'
import HeroDocument from '../components/hero-document'
import Intro from '../components/header'
import Layout from '../components/layout'
import { getAllDocuments } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Post from '../interfaces/document'

type Props = {
  AllDocuments: Post[]
}

export default function Index({ AllDocuments }: Props) {
  const heroDocument = AllDocuments[0]
  const moreDocuments = AllDocuments.slice(1)
  return (
    <>
      <Layout>
        <Head>
          <title>{CMS_NAME} | Document Page</title>
        </Head>
        <Container>
          <Intro />
   
          {heroDocument && (
            <HeroDocument
              title={heroDocument.title}
              date={heroDocument.date}
              author={heroDocument.author}
              slug={heroDocument.slug}
            />
          
          )}  
          {moreDocuments.length > 0 && <MoreStories Documents={moreDocuments} />}
        </Container>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const AllDocuments = getAllDocuments([
    'title',
    'date',
    'slug',
    'author',
    'excerpt',
  ])

  return {
    props: { AllDocuments },
  }
}
