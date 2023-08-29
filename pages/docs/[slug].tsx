import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import DocumentBody from '../../components/document-body'
import Header from '../../components/header'
import DocumentHeader from '../../components/document-header'
import Layout from '../../components/layout'
import { getDocumentBySlug, getAllDocuments } from '../../lib/api'
import DocumentTitle from '../../components/document-title'
import Head from 'next/head'
import { CMS_NAME } from '../../lib/constants'
import markdownToHtml from '../../lib/markdownToHtml'
import type PostType from '../../interfaces/document'
import MoreStories from '../../components/more-docs'
import HeroPost from '../../components/hero-document'
type Props = {
  document: PostType
  morePosts: PostType[]
  preview?: boolean
}

export default function Post({ document, morePosts, preview }: Props) {
  const router = useRouter()
  const title = `${CMS_NAME} | ${document.title}`
  if (!router.isFallback && !document?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <DocumentTitle>Loading……</DocumentTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>{title}</title>
              </Head>
              <div className="mb-8 md:mb-16 sm:mx-0">
    <hr></hr>
    </div>
              <DocumentHeader
                title={document.title}
                date={document.date}
                author={document.author}
              />
              <DocumentBody content={document.content} tags={document.tags}/>
    
            </article>
          </>
        )}

      </Container>

    </Layout>
  )
}


type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const document = getDocumentBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'tags',
    'ogImage',
  ])
  const content = await markdownToHtml(document.content || '')

  return {
    props: {
      document: {
        ...document,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const documents = getAllDocuments(['slug'])

  return {
    paths: documents.map((document) => {
      return {
        params: {
          slug: document.slug,
        },
      }
    }),
    fallback: false,
  }
}
