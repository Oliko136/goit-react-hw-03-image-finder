import { ImageGalleryItem } from "./ImageGalleryItem";
import styles from './ImageGallery.module.css';

export const ImageGallery = ({ items }) => {
    console.log(items);
    const element = items.map(({ id, webformatURL, tags }) => <ImageGalleryItem key={id} url={webformatURL} alt={tags} />)

    return (
        <ul className={styles.ImageGallery}>
           {element}
        </ul>
    )
}
