const Tag = (props) => {
    const { text, color } = props
    return (
        <>
            <span className={text > '9' ? 'g' : text == '0' ? 'r' : 'y'}>{text} {text > '9' ? 'Instock' : text == '0' ? 'Outstock' : 'Low'}</span>
            <style jsx>{`
                span {
                    text-align: center;
                    cursor: pointer;
                    font-size: 12px;
                    padding: 3px 0;
                    width: 80px;
                    border-radius: 25px;
                    color: #fff;
                }
                .r {
                    background-color: #fd4747;
                }
                .g {
                    background-color: #44dc8b;
                }
                .b {
                    background-color: #8f9bf9;
                }
                .y {
                    background-color: #fad47a;
                }
            `}</style>
        </>
    )
}

export default Tag