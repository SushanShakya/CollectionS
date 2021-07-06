import PropTypes from 'prop-types'
import React from 'react'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-shopping-bag"></span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Collection S'</h1>
        <p>
          Kurtha, Lehenga, Tops, Kids Kurtha, Kids Lehenga{' '}
          {/* <a href="https://html5up.net">HTML5 UP</a> and released */}
          <br />
          and more...{' '}
          {/* <a href="https://html5up.net/license">Creative Commons</a> license. */}
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            Intro
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Contact
          </button>
        </li>
        {/* <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button>
        </li> */}
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
