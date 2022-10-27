import { prismicPostType } from "./types/posts";

export function normalizePostData(data: prismicPostType) {
    return {
        title: data?.title?.[0]?.text,
        publishedDate: data?.blog_post_date,
        content: data?.main_content,
        image: {
            url: data?.image?.recommended?.url ?? data?.image?.url,
            alt: data?.image?.recommended?.alt ?? data?.image?.alt
        },
    }
}