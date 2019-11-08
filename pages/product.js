import { useState } from 'react'
import AddProductForm from '../components/AddProductForm'
import Layout from '../layout/MainLayout'
import ProductList from '../components/ProductList'

const Product = () => {
    const [products, setProducts] = useState([])

    const handleCreate = (data) => {
        products.push(data)
        let temp = products
        setProducts([...temp])
    }

    return (
        <>
            <Layout>
                <main>
                    <section className="add">
                        <h2>Add Product</h2>
                        <AddProductForm handleCreate={handleCreate} />
                    </section>
                    <section className="product">
                        <h2>Product List</h2>
                        <ProductList headon={false} data={products} dataon={true} />
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

export default Product