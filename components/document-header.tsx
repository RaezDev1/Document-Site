import Avatar from './avatar'
import DateFormatter from './date-formatter'
import PostTitle from './document-title'
import type Author from '@/interfaces/author'

type Props = {
  title: string
  date: string
  author: Author
}

const PostHeader = ({ title,  date, author }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12">
      <Avatar name={author.name} picture={author.picture} jobtitle={author.jobtitle} />
      
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
      <hr></hr>
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
        <Avatar name={author.name} picture={author.picture} jobtitle={author.jobtitle} />
        </div>
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  )
}

export default PostHeader
