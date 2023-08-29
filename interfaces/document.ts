import type Author from "./author";

type PostType = {
    slug: string
    title: string
    date: string
    author: Author
    ogImage: {
        url: string
    }
    content: string
    tags: string
    Documents: PostType[]
}

export default PostType