import React from 'react'
import Link from 'next/link'

const Nav = () => (
  <nav>
    <div>
      <Link href='/'>
        <h2>Logo</h2>
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


    <style jsx>{`
      :global(body) {
        margin: 0;
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
      }
    `}</style>
  </nav>
)

export default Nav
