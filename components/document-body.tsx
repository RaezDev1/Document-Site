import markdownStyles from './markdown-styles.module.css'

type Props = {
  content: string
  tags: string
}

const PostBody = ({ content,tags }: Props) => {
  return (
    <div className="max-w-2xl mx-auto">
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <br></br>
      <br></br>
      Tags: <div dangerouslySetInnerHTML={{ __html: tags }} />
    </div>

  )
}

export default PostBody
