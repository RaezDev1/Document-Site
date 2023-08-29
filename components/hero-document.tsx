import Avatar from './avatar'
import DateFormatter from './date-formatter'
import Link from 'next/link'
import type Author from '@/interfaces/author'

type Props = {
  title: string
  date: string
  author: Author
  slug: string
}

const HeroPost = ({
  title,
  date,
  author,
  slug,
}: Props) => {
  return (
    <section>
      <div className="mb-8 md:mb-16">
      <hr></hr>
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
            <Link
              as={`/docs/${slug}`}
              href="/docs/[slug]"
              className="hover:underline hover:text-blue-700"
            >
              {title}
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <DateFormatter dateString={date} />
          </div>
        </div>
        <div>
          <Avatar name={author.name} picture={author.picture} jobtitle={author.jobtitle} />
        </div>
      </div>
    </section>
  )
}

export default HeroPost
