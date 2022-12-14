import { usePrismicDocumentByUID } from '@prismicio/react'
import { normalizePostData } from './normalizer'
import { prismicPostType } from './types/posts'

export function getPost(slug?: string) {
    if (!slug) return null

    const [document] = usePrismicDocumentByUID('blog_title', slug)
    
    if (!document?.data) return null

    const data: prismicPostType = document?.data
    return normalizePostData(data)
}