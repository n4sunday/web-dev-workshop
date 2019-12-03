import { useState, useEffect } from 'react'
import AddProductForm from '../components/AddProductForm'
import Layout from '../layout/MainLayout'
import ProductList from '../components/ProductList'
import withAuthenticated from '../hoc/withAuthenticated'
import { compose } from 'redux'
import firebase from 'firebase'
import { auth } from '../config/firebase'

const Product = (props) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const handleCreateProduct = (data) => {
        products.unshift(data)
        let temp = products
        setProducts([...temp])
    }

    const fetchData = () => {
        var userId = firebase.auth().currentUser.uid
        var ref = firebase.database().ref()
        ref.on("value",
            (snapshot) => {
                console.log(snapshot.val());
            }, (error) => {
                console.log("Error: " + error.code)
            })
    }

    const handleUpdateProduct = (data) => {

    }

    const handleDeleteProduct = (data) => {

    }

    return (
        <>
            <Layout UserDisplay={props.User.data.displayName}>
                <main>
                    <section className="add">
                        <h2>Add Product</h2>
                        <AddProductForm handleCreate={handleCreateProduct} />
                    </section>
                    <section className="product">
                        <h2>Product List</h2>
                        <ProductList
                            headon={false}
                            data={products}
                            dataon={true}
                            onUpdate={handleUpdateProduct}
                            onDelete={handleDeleteProduct}
                        />
                    </section>
                </main>

            </Layout>
            <style jsx>{`
                main {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    height: 100vh;
                }
                .add {
                    width: 1200px;
                    display: flex;
                    align-items: center;
                    flex-direction: column;
                }
                @media (max-width: 768px ) and (min-width: 426px) {
                    main {
                        width: 100%;
                    }
                    .add {
                        width: 100%;
                    }
                }
                @media (max-width: 425px) {
                    .add {
                        width: 100%;
                    }
                    
                }
            `}</style>
        </>
    )
}

export default compose(
    withAuthenticated
)(Product)