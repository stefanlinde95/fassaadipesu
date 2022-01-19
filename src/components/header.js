import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import logoBlue from "../images/logoBlue.svg"

const Header = ({ siteTitle }) => (
  <header>
    <div className="container">
      <div className="row">
        <div
          className="nav"
          style={{
            margin: `0 auto`,
          }}
        >
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            <img src={logoBlue} alt={siteTitle} className="logo" />
          </Link>
          <div className="navbar ms-auto">
            <Link to="/">Avaleht</Link>
            <Link className="cta" to="/">
              Küsi hinda
            </Link>
          </div>
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
