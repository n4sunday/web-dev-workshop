const Button = (props, { color = "primary", onClick }) => {
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

const ButtonBuy = ({ children, color, onClick }) => {
    return (
        <>
            <button className={`bt ${color}`} onClick={onClick}>
                {children}
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
                .bt:focus {
                    outline: none;
                }
                .primary {
                    background-color: #fff;
                    color: #1d1a4b;
                    border: 2px solid #1d1a4b;
                }
                .primary:hover { background-color: #1d1a4b; color: #fff; }
                .sec {
                    background-color: #fff;
                    color: #007bff;
                    border: 2px solid #007bff;
                    margin: 0 5px;
                }
                .sec:hover { background-color: #007bff; color: #fff; }
                .suc {
                    background-color: #fff;
                    color: #28a745;
                    border: 2px solid #28a745;
                    margin: 0 5px;
                }
                .suc:hover { background-color: #28a745; color: #fff; }
                .dan {
                    background-color: #fff;
                    color: #dc3545;
                    border: 2px solid #dc3545;
                    margin: 0 5px;
                }
                .dan:hover { background-color: #dc3545; color: #fff; }
                
            `}</style>
        </>
    )
}
ButtonBuy.defaultProps = {
    color: 'primary'
}

export {
    Button,
    ButtonBuy
}