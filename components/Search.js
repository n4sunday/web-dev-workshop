const Search = () => {
    return (
        <>
            <div className="item">
                <input type="text" placeholder="search"/>
                <img className="icon-search" src="/static/icon/search.svg" alt=""/>
            </div>
            <style jsx>{` 
                .item {
                    position: relative;
                    display: flex;
                    align-items: center;
                }  
                input {
                    padding-left: 45px; 
                    height: 40px;
                    width: 350px;
                    background-color: #f1f2f8;
                    border: none;
                    font-size: 20px;
                }
                input:focus {
                    outline: none;
                }
                img {
                    margin: 0 10px;
                    left: 0;
                    position: absolute;
                    height: 25px;
                }
                @media (max-width: 425px) {
                    input {
                        padding-left: 45px; 
                        height: 40px;
                        width: 190px;
                        background-color: #f1f2f8;
                        border: none;
                        font-size: 20px;
                    }
                }
        `}</style>
        </>
    )
}

export default Search