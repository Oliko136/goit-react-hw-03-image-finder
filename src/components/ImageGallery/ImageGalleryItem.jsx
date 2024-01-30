export const ImageGalleryItem = ({ url, alt }) => {
    return (
        <li className="gallery-item">
            <img src={url} alt={alt} />
        </li>
    )
}