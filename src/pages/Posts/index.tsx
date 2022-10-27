import { useParams } from 'react-router-dom'
import { Banner } from '../../components/Banner'
import { getPost } from '../../helpers/normalizers/posts'
import { PrismicRichText } from '@prismicio/react'

export function Posts() {
    const { slug } = useParams()
    const data = getPost(slug)

    if(!data) return null

    return (
        <>  
            <h1>{data.title}</h1>
            {data?.image?.url && <Banner image={data.image} />}
            <PrismicRichText field={data.content} />
        </>
    )
}