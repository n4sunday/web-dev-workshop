import Card from './Card'

const ProductList = ({ head = "Test" }) => {
    return (
        <>
            <main className="main">
                <div className="top">
                    <span className={head}>{head}</span>
                    Product
                    <div className="line"></div>
                </div>
                <div className="content">
                    <Card />
                    <Card />
                    <Card color="r" />
                    <Card />
                    <Card />
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
                        width: 400px;
                    }
                }
            `}</style>
        </>
    )
}

export default ProductList