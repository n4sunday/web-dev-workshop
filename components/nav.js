import React, { useState } from 'react'
import Link from 'next/link'

const Nav = () => {

  const [logo, setLogo] = useState('/static/img/Logo.PNG')

  return (
    <nav>
      <div>
        <Link href='/'>
          <img className="logo" src={logo}></img>
        </Link>
      </div>
      <div><ul>
        <li>
          <Link href='/'>
            <a>Home</a>
          </Link>
          <Link href='/manage'>
            <a>Manage</a>
          </Link>
          <Link href='/product'>
            <a>Product</a>
          </Link>
          <Link href='/about'>
            <a>About</a>
          </Link>
        </li>
      </ul></div>

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
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }
      nav {
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
      ul {
        display: flex;
        justify-content: space-between;
      }
      nav > ul {
        padding: 4px 16px;
      }
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
      h2 {
        margin: 0 20px;
        cursor: pointer;
        transition: linear 500ms;
      }
      h2:hover {
        color: #067df7;
      }
    `}</style>
    </nav>
  )
}

export default Nav
