const Button = (props, { color = "primary" }) => {
    return (
        <>
            <button className={`bt ${color}`}>
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

export {
    Button,
}