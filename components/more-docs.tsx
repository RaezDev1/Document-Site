import DocumentPreview from './document-preview'
import type Document from '@/interfaces/document'

type Props = {
  Documents: Document[]
}

const MoreDocument = ({ Documents }: Props) => {
  return (
    <section>
      <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
        More Document
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {Documents.map((Document) => (
          <DocumentPreview
            key={Document.slug}
            title={Document.title}
            date={Document.date}
            author={Document.author}
            slug={Document.slug}
          />
        ))}
      </div>
    </section>
  )
}

export default MoreDocument
