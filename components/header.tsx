import { CMS_NAME } from "@/lib/constants";
import Link from 'next/link'

const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-8x1 font-bold tracking-tighter leading-tight md:pr-8">
      <Link href="/" className="hover:underline hover:text-blue-700 ">
      {CMS_NAME}
      </Link>
      
      </h1>
      <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="../"
              className="hover:underline hover:text-blue-700 font-bold py-3 px-12 lg:px-2 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Home Page
            </a>
            <a
              href="../docs"
              className="hover:underline hover:text-blue-700 font-bold py-3 px-12 lg:px-2 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Document Page
            </a>

          </div>


    </section>
  )
}

export default Intro
