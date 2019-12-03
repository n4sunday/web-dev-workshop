import Tag from './Tag'
import { ButtonBuy } from './Button'

const Card = (props) => {
    const { name, img, des, price, stock, color, inscreen } = props

    return (
        <>
            <div className="card" >
                <div className="block-img" onClick={props.onClick}><img src={img} alt="item" /></div>
                <div className="block">
                    <section className="main">
                        <h4>{name}</h4>
                        <div className="des">{des}</div>
                        <div className="stock">
                            <Tag text={stock} reviwe={true} color={color} />
                            <div className="price"> ฿{price}</div>
                        </div>
                    </section>
                    <section className="footer">
                        {inscreen === 'home' ? <ButtonBuy>Buy</ButtonBuy> : 
                        <div className="manage">
                            <ButtonBuy color="sec" onUpdate={props.onUpdate}>Update</ButtonBuy >
                            <ButtonBuy color="dan" onDelete={props.onDelete}>Delete</ButtonBuy>
                        </div>}
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
                .block-img {
                    height: 150px;
                    width: 200px;
                    overflow: hidden;
                }
                img {
                    width: 200px;
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
                .manage {
                    display: flex;
                }
                @media (max-width: 768px) and (min-width: 426px) {
                    .card {
                        width: 190px;
                        min-width: 190px;
                        height: 275px;
                    }
                    .block-img {
                        height: 140px;
                        width: 190px;
                        overflow: hidden;
                     }
                    img {
                        width: 190px;
                    }
                }
                @media (max-width: 425px) {
                    .card {
                        width: 390px;
                        display: flex;
                        height: 125px;
                        margin: 8px 15px;
                    }
                    .block-img {
                        height: 125px;
                        width: 300px;
                        overflow: hidden;
                     }
                    img {
                        width: 155px;                           
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