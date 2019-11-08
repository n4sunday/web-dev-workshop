import Card from './Card'

const ProductList = ({ dataon = false, data, head = "Test", headon = true }) => {
    return (
        <>
            <main className="main">
                {headon ? <div className="top">
                    <span className={head}>{head}</span>
                    Product
                    <div className="line"></div>
                </div> : ''}
                <div className="content">
                    {dataon ?
                        data.map((item) => (
                            <Card name={item.name} des={item.des} price={item.price} stock={item.quantity} />
                        ))
                        : <>
                            <Card />
                            <Card color="r" stock="Outstock" />
                            <Card />
                            <Card />
                            <Card />
                        </>
                    }

                </div>
            </main>
            <style jsx>{`
                .main {
                    width: 1200px;
                    margin: 15px 0;
                }
                .top {
                    font-size: 20px;
                    display: flex;
                    height: 20px;
                    align-items: center;
                }
                .top span {
                    margin-right: 5px;
                    font-weight: bold;
                }
                .Hot {
                    color: #ff7d8b;
                }
                .Cool {
                    color: #8f9bf9;
                }
                .line {
                    margin-left: 10px; 
                    height: 1.5px;
                    width: 100%;
                    background-color: #c1c1c1;
                }
                .content {
                    display: flex;
                    justify-content: flex-start ;
                    flex-wrap: wrap ;
                }
                @media (max-width: 768px ) and (min-width: 426px) {
                    main {
                        width: 700px !important;
                    }
                }
                @media (max-width: 425px) {
                    .main {
                        width: 370px;
                    }
                    .top {
                        width: 370px;
                    }
                }
            `}</style>
        </>
    )
}

export default ProductList