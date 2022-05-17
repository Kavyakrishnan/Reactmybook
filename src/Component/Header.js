import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg dark-bg-success">
  <div className="container-fluid"></div>
   <Link className="navbar-brand " to="/">Book</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <li>
              
      <Link className="navbar-brand " to="/">Addbook</Link>
      </li>
      <li>
      <Link className="navbar-brand " to="/search">Searchbook</Link>
      </li>

      <li>
      <Link className="navbar-brand " to="/booklist">View</Link>
      </li>


      </div>
    </div>
  
</nav>
  )
}

export default Header