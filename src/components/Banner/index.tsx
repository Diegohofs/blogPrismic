interface BannerProps {
    image: {
        alt?: string;
        url?: string;
    }
}

export function Banner({image}: BannerProps) {
    if(!image?.url) return null

    return (
        <img src={image.url} alt={image.alt} />
    )
}