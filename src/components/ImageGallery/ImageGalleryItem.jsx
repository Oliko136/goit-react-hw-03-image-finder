import styles from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ url, alt }) => {
    return (
        <li className={styles.ImageGalleryItem}>
            <img src={url} alt={alt} className={styles.ImageGalleryItemImage} />
        </li>
    )
}