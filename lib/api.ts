import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const postsDirectory = join(process.cwd(), '_docs')

export function getDocumentSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getDocumentBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  type Items = {
    [key: string]: string
  }

  const items: Items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllDocuments(fields: string[] = []) {
  const slugs = getDocumentSlugs()
  const posts = slugs
    .map((slug) => getDocumentBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((document1, document2) => (document1.date > document2.date ? -1 : 1))
  return posts
}
