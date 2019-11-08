import Card from './Card'

const initailData = [
    {
        name: "Redeemer",
        price: 6040,
        stock: 10,
        des: "Cut everything",
        img: "/static/img/Products/Redeemer.jpg"
    },
    {
        name: "Templar",
        price: 9075,
        stock: 5,
        des: "Cut everything",
        img: "/static/img/Products/lightsaber.jpg"
    },
]

const ProductList = ({ dataon = false, hot , data, head = "Test", headon = true }) => {
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
                            <Card name={item.name} des={item.des} price={item.price} stock={item.quantity} img="/static/img/Products/lightsaber.jpg" />
                        ))
                        : hot ? 
                        <>
                            <Card name="Templar" price="9075" stock={10} des="Cut everything" img="/static/img/Products/Templar.jpg" inscreen="home" />
                            <Card name="Archon" price="4522" stock={10} des="Cut everything" img="/static/img/Products/Archon.jpg" inscreen="home" />
                            <Card name="Redeemer" price="6040" stock={5} des="Cut everything" img="/static/img/Products/Redeemer.jpg" inscreen="home" />
                            <Card name="Bane Mk2" price="2500" stock={0} des="Cut everything" img="/static/img/Products/Bane_Mk2.jpg" inscreen="home" />
                            <Card name="Phoenix" price="4522" stock={2} des="Cut everything" img="/static/img/Products/Phoenix.jpg" inscreen="home" />
                            <Card name="Guardianr" price="4000" stock={10} des="Cut everything" img="/static/img/Products/Guardian.jpg" inscreen="home" />
                            <Card name="The Count" price="6040" stock={10} des="Cut everything" img="/static/img/Products/The Count.jpg" inscreen="home" />
                            <Card name="Sinister Prophecy" price="4522" stock={10} des="Cut everything" img="/static/img/Products/Sinister Prophecy.jpg" inscreen="home" />
                            <Card name="Commando" price="4522" stock={20} des="Cut everything" img="/static/img/Products/Commando.jpg" inscreen="home" />
                            <Card name="Emerald Knight" price="4522" stock={2} des="Cut everything" img="/static/img/Products/Emerald Knight.jpg" inscreen="home" />
                        </> :
                        <>
                            <Card name="Resilient" price="2246" stock={10} des="Cut everything" img="/static/img/Products/Resilient.jpg" inscreen="home" />
                            <Card name="Unleashed" price="7557" stock={10} des="Cut everything" img="/static/img/Products/Unleashed.jpg" inscreen="home" />
                            <Card name="Reyflex" price="9075" stock={5} des="Cut everything" img="/static/img/Products/Reyflex.jpg" inscreen="home" />
                            <Card name="Temple Guard Battle" price="6040" stock={0} des="Cut everything" img="/static/img/Products/Temple Guard Battle Staff.jpg" inscreen="home" />
                            <Card name="Defender" price="3034" stock={1} des="Cut everything" img="/static/img/Products/Defender.jpg" inscreen="home" />
                            <Card name="Acolyte Shoto" price="1821" stock={25} des="Cut everything" img="/static/img/Products/Acolyte Shoto.jpg" inscreen="home" />
                            <Card name="Eris" price="2276" stock={20} des="Cut everything" img="/static/img/Products/Eris.jpg" inscreen="home" />
                            <Card name="Sentinel" price="2731" stock={0} des="Cut everything" img="/static/img/Products/Sentinel.jpg" inscreen="home" />
                            <Card name="Adept" price="4522" stock={3} des="Cut everything" img="/static/img/Products/Adept.jpg" inscreen="home" />
                            <Card name="Juggernaut" price="4522" stock={2} des="Cut everything" img="/static/img/Products/Juggernaut.jpg" inscreen="home" />
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