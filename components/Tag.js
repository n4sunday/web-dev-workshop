const Tag = ({ text = "Tag", color = "g" }) => {
    return (
        <>
            <span className={color}>{text}</span>
            <style jsx>{`
                span {
                    text-align: center;
                    cursor: pointer;
                    font-size: 12px;
                    padding: 3px 0;
                    width: 60px;
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