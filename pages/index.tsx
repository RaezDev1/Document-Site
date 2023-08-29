import Head from 'next/head'
import Container from '../components/container'
import Layout from '../components/layout'
import Intro from '../components/header'
import { CMS_NAME } from '@/lib/constants'
import Post from '../interfaces/document'
import MoreStories from '../components/more-docs'
import HeroDocument from '../components/hero-document'
import { getAllDocuments } from '../lib/api'
import type PostType from '../interfaces/document'

type Props = {
  AllDocuments: Post[]
}

export default function HomePage({ AllDocuments }: Props) {
  const heroDocument = AllDocuments[0]
  const moreDocuments = AllDocuments.slice(1)
    return(
        <>
        <Layout>
        <Container>
              <Head>
                <title>{CMS_NAME} | Home Page</title>
              </Head>
              <Intro />
      <h1 className="underline text-2xl text-center text-white italic font-bold">Welcome to the {CMS_NAME} Home Page!</h1>
      <p className="text-center text-white text-xl">This is the home page of the {CMS_NAME} website. This is where you can find all the information about the {CMS_NAME} website. You can also find the </p>
      
  <br/>  
  <br/>
  <br/>
  <br/> 
      {heroDocument && (
            <HeroDocument
              title={heroDocument.title}
              date={heroDocument.date}
              author={heroDocument.author}
              slug={heroDocument.slug}
            />
          
        
          )}  
            <p className="text-center text-white text-xl">To see all docs go to <a className='hover:underline hover:text-blue' href='../docs'>Here</a> </p>

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