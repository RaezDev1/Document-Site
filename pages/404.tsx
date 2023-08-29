import Footer from "../components/footer";
import Intro from "../components/header";
import Container from '../components/container'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'


export default function Error404(){
    return (
        <>
        <Head>
          <title>{CMS_NAME} | 404 Error Page</title>
        </Head>
        <Container>
          <Intro />
            <h1 className="font-extrabold text-center text-5xl pt-20">
                404
            </h1>
            <p className="text-center text-2xl text-light">That page it not on our servers! That's all we know.</p>
            <a className="block bg-blurple text-white font-bold transition duration-200 shadow hover:shadow-2xl ease-in-and-out rounded-lg mx-96 mt-16 py-3 text-xl font-sans text-center" href="/">Back Home</a>
            <br></br>
            <br></br>
            <Footer />
            </Container>

        </>
    );
}