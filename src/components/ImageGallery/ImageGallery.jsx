import { ImageGalleryItem } from "./ImageGalleryItem";

export const ImageGallery = ({ items }) => {
    console.log(items);
    const element = items.map(({ id, webformatURL, tags }) => <ImageGalleryItem key={id} url={webformatURL} alt={tags} />)

    return (
        <ul className="gallery">
           {element}
        </ul>
    )
}
