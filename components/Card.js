import Tag from './Tag'
import { ButtonBuy } from './Button'

const Card = ({
    name = "Light Saber",
    img = "/static/img/Products/lightsaber.jpg",
    des = "Cut everything",
    price = "15000",
    stock = "Instock",
    color = "g",
    inscreen = "home"
}) => {
    return (
        <>
            <div className="card">
                <img src={img} alt="item" />
                <div className="block">
                    <section className="main">
                        <h4>{name}</h4>
                        <div className="des">{des}</div>
                        <div className="stock">
                            <Tag text={stock} color={color} />
                            <div className="price"> ฿{price}</div>
                        </div>
                    </section>
                    <section className="footer">
                        {inscreen === 'home' ? <ButtonBuy>Buy</ButtonBuy> : ''}
                    </section>
                </div>
            </div>
            <style jsx>{`
                .card {
                    cursor: pointer;
                    overflow: hidden;
                    border: 1px solid #d7dfe3;
                    border-radius: 4px;
                    width: 200px;
                    min-width: 200px;
                    height: 285px;
                    margin: 20px 15px;
                    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.05);
                }
                .card:hover {
                    border: 1px solid #2c50ef;                    
                }
                img {
                    height: 150px;
                }
                .main {
                    padding: 10px;
                }
                h4 {
                    margin: 0;
                }
                .des {
                    margin: 5px 0;
                }
                .stock {
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                }
                .price {
                    color: #2c50ef;
                    font-weight: bold;
                }
                .footer {
                    padding: 5px;
                }
                @media (max-width: 768px) and (min-width: 426px) {
                    .card {
                        width: 190px;
                        min-width: 190px;
                    }
                    img {
                        height: 150px;
                    }
                }
                @media (max-width: 425px) {
                    .card {
                        width: 390px;
                        display: flex;
                        height: 125px;
                        margin: 8px 15px;
                    }
                    img {
                        height: 125px;
                    }
                    .block {
                        width: 100%;
                        margin: 0 5px;
                    }
                    .main {
                        
                    }
                    .footer {
                        padding: 0;
                    }
                }
            `}</style>
        </>
    )
}

export default Card