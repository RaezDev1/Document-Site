import { remark } from 'remark'
import html from 'remark-html'

export default async function markdownToHtml(markdown:string) {
    const results = await remark().use(html).process(markdown)
    return results.toString()   
}