import { useState } from 'react'
import { Button } from './Button'

const AddProductForm = (props) => {
    const [name, setName] = useState('')
    const [des, setDes] = useState('')
    const [quantity, setQuantity] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState('')

    const next = () => {
        props.handleCreate({ name, des, quantity, price })
        setName('')
        setDes('')
        setQuantity('')
        setPrice('')
    }

    return (
        <>
            <div className="form" >
                <label>
                    <p>Name</p>
                    <input
                        className="input"
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        placeholder="name"
                    />
                </label>
                <label>
                    <p>Description</p>
                    <textarea
                        type="text"
                        onChange={(e) => setDes(e.target.value)}
                        value={des}
                        placeholder="description"
                    />
                </label>
                <label>
                    <p>Price</p>
                    <input
                        className="input"
                        type="number"
                        onChange={(e) => setPrice(+e.target.value)}
                        value={price}
                        placeholder="price"
                    />
                </label>
                <label>
                    <p>Quantity</p>
                    <input
                        className="input"
                        type="number"
                        onChange={(e) => setQuantity(+e.target.value)}
                        value={quantity}
                        placeholder="quantity"
                    />
                </label>
                <label>
                    <p>Images</p>
                    <input
                        className="image"
                        type="file" />
                </label>
                <button onClick={next}>Create</button>
            </div>
            <style jsx>{`
                .form {
                    padding: 15px;
                    cursor: pointer;
                    overflow: hidden;
                    border: 1px solid #d7dfe3;
                    border-radius: 4px;
                    width: 500px;
                    min-width: 500px;
                    min-height: 530px;
                    margin: 10px 15px;
                    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.05);
                }
                label {

                }
                p {
                    margin: 15px 0 5px 0;
                }
                .input {
                    padding-left: 10px; 
                    height: 40px;
                    width: 90%;
                    background-color: #f1f2f8;
                    border: 1px solid #d7dfe3;
                    font-size: 16px;
                    border-radius: 3px;
                }
                textarea {
                    padding: 10px 0 0 10px; 
                    font-size: 16px;
                    width: 90%;
                    max-width: 90%;
                    min-width: 90%;
                    height: 100px;
                    min-height: 40px;
                    background-color: #f1f2f8;
                    border: 1px solid #d7dfe3;
                    border-radius: 3px;
                }
                textarea:focus {
                    outline: none;
                }
                .image {
                    padding: 5px;
                    width: 90%;
                    border: 1px solid #d7dfe3;
                    margin-bottom: 10px;
                    display: flex;
                    align-items: center;
                }
                button {
                    background-color: #44dc8b;
                    cursor: pointer;
                    height: 42px;
                    padding: 0 25px;
                    font-size: 16px;
                    transition: 300ms linear;
                    color: #fff;
                    border: 2px solid #44dc8b;
                }
                button:hover {
                    background-color: #fff;
                    color: #44dc8b;
                }
                button:focus {
                    outline: none;
                }
                @media (max-width: 768px) and (min-width: 426px) {
                   
                }
                @media (max-width: 425px) {
                    .form {
                        padding: 15px;
                        cursor: pointer;
                        overflow: hidden;
                        border: 1px solid #d7dfe3;
                        border-radius: 4px;
                        width: 320px;
                        min-width: 320px;
                        min-height: 470px;
                        margin: 10px 15px;
                        box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.05);
                    }
                    .input {
                        height: 30px;
                        width: 90%;
                        background-color: #f1f2f8;
                        border: 1px solid #d7dfe3;
                        font-size: 14px;
                    }
                    textarea {
                        font-size: 14px;
                        max-width: 90%;
                        min-width: 90%;
                        height: 70px;
                        min-height: 40px;
                        background-color: #f1f2f8;
                        border: 1px solid #d7dfe3;
                        border-radius: 3px;
                    }
                }
                
            `}</style>
        </>
    )
}

export default AddProductForm