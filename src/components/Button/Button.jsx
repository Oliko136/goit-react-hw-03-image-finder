export const Button = ({onClick, children}) => {
    return (
        <button onClick={onClick} type="button">{children}</button>
    )
}