const Button = (props, { color = "primary" }, onClick) => {
    return (
        <>
            <button className={`bt ${color}`} onClick={onClick}>
                {props.children}
            </button>
            <style jsx>{`
                .bt {
                    cursor: pointer;
                    height: 42px;
                    padding: 0 25px;
                    font-size: 16px;
                    transition: 300ms linear;
                }
                .bt:hover {
                    background-color: #fff;                    
                }
                .primary {
                    background-color: #8f9bf9;
                    color: #fff;
                    border: 2px solid #8f9bf9;
                }
                .primary:hover {
                    color: #8f9bf9;
                }
                
            `}</style>
        </>
    )
}

const ButtonBuy = (props, { color = "primary", onClick }) => {
    return (
        <>
            <button className={`bt ${color}`} onClick={onClick}>
                {props.children}
            </button>
            <style jsx>{`
                .bt {
                    cursor: pointer;
                    padding: 5px;
                    width: 100%;
                    font-size: 16px;
                    transition: 300ms linear;
                    border-radius: 5px;
                }
                .bt:hover {
                    background-color: #fff;                    
                }
                .primary {
                    background-color: #fff;
                    color: #1d1a4b;
                    border: 2px solid #1d1a4b;
                }
                .primary:hover {
                    background-color: #1d1a4b;
                    color: #fff;
                }
                
            `}</style>
        </>
    )
}

export {
    Button,
    ButtonBuy
}