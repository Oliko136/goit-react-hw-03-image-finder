import styles from './Button.module.css';

export const Button = ({ onClick, children }) => {
    return (
        <button className={styles.Button} onClick={onClick} type="button">{children}</button>
    )
}