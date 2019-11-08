import Link from 'next/link'
import LoginForm from '../components/LoginForm'

const Login = () => {
    return (
        <>
            <main>
                <div className="container">
                    <section className="logo">
                        <Link href="/">
                            <img src="/static/img/LogoW.PNG" alt="" />
                        </Link>
                        <span>version 0.1.0</span>
                    </section>
                    <section className="form">
                        <LoginForm />
                    </section>
                </div>
            </main>
            <style jsx>{`
                main {
                    height: 100vh;
                    width: 100%;
                    background-color: #1d2127;
                }
                .container {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 100%;
                    width: 100%;
                }
                .logo {
                    padding: 0 30px;
                    height: 220px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;                    
                    border-right: 1px solid #afafaf;
                }
                .logo span {
                    font-size: 14px;
                    color: #afafaf;
                }
                img {
                    cursor: pointer;
                    width: 200px;
                }
                @media (max-width: 425px) {
                    .container {
                        align-items: center;
                        justify-content: center;
                        flex-direction:column;
                    } 
                    .logo {
                        border-right: none;
                    }
                    img {
                    width: 250px;
                    }
                }
            `}</style>
        </>
    )
}

export default Login