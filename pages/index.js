import Layout from '../layout/MainLayout'
import Search from '../components/Search'
import { Button } from '../components/Button'
import ProductList from '../components/ProductList'

const HomePage = () => {
  return (
    <Layout>
      <main>
        <section className="top">
          <img src="/static/img/home.png" alt="home" />
        </section>
        <section className="search">
          <Search />
          <Button>Search</Button>
        </section>
        <section className="hot">
          <ProductList head="Hot" />
          <ProductList head="Cool" />
        </section>
      </main>

      <style jsx>{`
        main {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .top {
          width: 100%;
          height: 450px;
          display: flex;
          justify-content: center;
          background-color: #aac5ee;
        }
        img {
          height: 450px;
        }
        @media (max-width: 425px) {
          .top {height: 260px;}
          img {height: 260px;}
        }
        .search {
          display: flex;
          margin: 15px 0;
        }
      `}</style>
    </Layout>
  )
}

export default HomePage