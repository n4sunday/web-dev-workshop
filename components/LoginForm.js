import { useState } from 'react'
import { auth } from '../config/firebase'
import Router from 'next/router'
import firebase from 'firebase'

const FormLogin = () => {
    const [email, setEmail] = useState('test@test.com')
    const [pass, setPass] = useState('123456')
    const [message, setMes] = useState({
        status: false,
        text: '',
    })

    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/igm

    const login = () => {
        if (email === '', pass === '') {
            setMes({ ...message, status: true, text: 'Invalid email and password' })
            resetAlert()
        }
        auth.signInWithEmailAndPassword(email, pass)
            .then(res => {
                if (res.user) {
                    Router.push('/')
                }
            })
            .catch(error => {
                setMes({ ...message, status: true, text: 'Incorrect email and password' })
            })
    }

    const checkEmail = () => {
        if (!emailRegex.test(email)) {
            setMes({ ...message, status: true, text: 'Invalid email' })
            resetAlert()
        }
    }

    const resetAlert = () => {
        setTimeout(() => {
            setMes({ ...message, status: false, })
        }, 2500)
    }

    return (
        <>
            {message.status ?
                <div className="block-alert">
                    <div className="alert">
                        <p className="mes">
                            {message.text}
                        </p>
                    </div>
                </div> : ''}
            <div className="form">

                <label>
                    <p>Email</p>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} onBlur={checkEmail} onClick={() => setMes({ status: false })} value={email} />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" onChange={(e) => setPass(e.target.value)} value={pass} />
                </label>
                <button onClick={login}>Login</button>
            </div>

            <style jsx>{`
                .form {
                    display: flex;
                    flex-direction: column;
                    padding: 0 30px;
                }
                .block-alert {
                    position: fixed;
                    margin-top: 5px;
                    width: 100vw;
                    display: flex;
                    top: 0;
                    left: 0;
                    right: 0;
                    justify-content: center;
                }
                .alert {
                    display: flex;
                    align-items: center;
                    width: 320px;
                    height: 50px;
                    border-radius: 3px;
                    border: 1px solid #ff8080;
                    background-color: #ffb3b3;
                    animation: mymove 500ms;
                }
                @keyframes mymove {
                    0% { margin-top: -100px; }
                    100% { margin-top: 0px; }
                }
                .mes {
                    color: #4c0000;
                    margin: 0 10px;
                }
                p {
                    color: #fff;
                    margin: 15px 0 5px 0;
                }
                input {
                    padding: 0 10px;
                    font-size: 16px;
                    height: 30px;
                    width: 260px;
                    background-color: #1d2127;
                    border: none;
                    border-bottom: 1px solid #afafaf;
                    color: #fff;
                }
                input:focus {
                    border-bottom: 1px solid #3986ce;
                }
                button {
                    cursor: pointer;
                    color: #fff;
                    border: none;
                    font-size: 16px;
                    background-color: #3986ce;
                    height: 35px;
                    margin: 30px 0;
                }
                button:hover {
                    background-color: #1b5892;
                }
                button:focus {
                    outline: none;
                    background-color: #3986f1;
                }
                @media (max-width: 425px) {
                    input {
                        width: 260px;
                        height: 35px;
                    }
                    button {
                        font-size: 20px;
                        height: 45px;
                    }
                }
            `}</style>
        </>
    )
}

export default FormLogin