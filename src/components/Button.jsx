
const Button = ({ backgroundColor }) => {

    const style = `
    button
    ${backgroundColor}
    `;

    return <button className={style}>5</button>
}

export default Button;