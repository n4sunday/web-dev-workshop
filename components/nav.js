import React, { useState } from 'react'
import Link from 'next/link'

const Nav = () => {
  const [logo, setLogo] = useState('/static/img/Logo.PNG')
  const [open, setOpen] = useState(false)

  return (
    <nav>
      <div>
        <Link href='/'>
          <img className="logo" src={logo}></img>
        </Link>
      </div>
      <div>
        <ul className="normal">
          <li>
            <Link href='/'>
              <a>Home</a>
            </Link>
            <Link href='/product'>
              <a>Product</a>
            </Link>
            <Link href='/manage'>
              <a>Manage</a>
            </Link>
            <Link href='/about'>
              <a>About</a>
            </Link>
          </li>
        </ul>

        <div className="burger" onClick={() => setOpen(!open)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={open ? 'menu' : 'close'}>
          <div className="burger" onClick={() => setOpen(!open)}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="box">
            <div className="list">
              <Link href='/'>
                <div className="a">Home</div>
              </Link>
            </div>

            <div className="list">
              <Link href='/product'>
                <div className="a">Product</div>
              </Link>
            </div>

            <div className="list">
              <Link href='/manage'>
                <div className="a">Manage</div>
              </Link>
            </div>



            <div className="list">
              <Link href='/about'>
                <div className="a">About</div>
              </Link>
            </div>
          </div>

        </div>
      </div>

      <style jsx global>{`
        @font-face {
          font-family: Roboto;
          src: url(/static/font/Roboto-Regular.ttf);
          font-weight: 600;
        }
        body {
          margin: 0 !important;
          font-family: 'Roboto';
        }
      `}</style>
      <style jsx>{`
      :global(body) {
 
      }
      nav {
        height: 55px;
        text-align: center;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
      }
      .logo {
        cursor: pointer;
        margin: 0 20px;
        height: 35px;
      }
      .normal {
        display: flex;
      }
      ul {
        display: flex;
        justify-content: space-between;
      }
      nav > ul { padding: 4px 16px; }
      li {
        display: flex;
        padding: 6px 8px;
      }
      a {
        color: #067df7;
        text-decoration: none;
        font-size: 13px;
        margin: 0 20px;
      }
      a:hover { color: #06c0ff;}
      h2 {
        margin: 0 20px;
        cursor: pointer;
        transition: linear 500ms;
      }
      h2:hover {
        color: #067df7;
      }
      .menu {
        display: none;
      }
      .burger {
        display: none;
      }
      .box {
        display: none;
      }
      @media (max-width: 768px) {
        .normal {
          display: none;
        }
        .burger {
          display: flex !important;
          flex-direction: column;
          z-index: 21;
          cursor: pointer;
          margin: 0 20px;
          padding: 5px;
        }
        .burger span{
          margin: 3px 0;
          display: flex !important;
          background-color: #484848;
          width: 28px;
          height: 3px;
        }
        .close {
          display: none !important;
        }
        .menu {
          z-index: 20;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100vw;
          height: 100vh;
          background-color: #b7e2ff;
          position: fixed;
          display: flex !important;
          margin-top: 0px;
          animation: mymove 200ms;
        }
        @keyframes mymove {
          0% { margin-top: -600px; }
          100% { margin-top: 0px; }
        }
        .box { 
          width: 100vw;
          height: 100vh;       
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }
        
        .menu .burger {
          margin: 7px 20px;
          position: absolute;
          top: 0;
          right: 0;
        }
        .menu .burger span{
          background-color: #fff; 
        }
        .list {
          margin: 18px 0;
        }
        .list .a{
          color: #fff;
          font-size: 26px;
          transition: 300ms linear;
        }
        .list .a:active { color: #067df7;}
      }
    `}</style>
    </nav>
  )
}

export default Nav
