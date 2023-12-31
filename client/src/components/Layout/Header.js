import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../../context/auth'

const Header = () => {
  const [auth, setAuth] = useAuth();
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: ''
    });
    localStorage.removeItem('auth');
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">

            <NavLink to="/" className="navbar-brand">Ecommerce</NavLink>

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <NavLink to="/" className="nav-link">Home</NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/category" className="nav-link">Category</NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/cart" className="nav-link">Cart(0)</NavLink>
              </li>

              {
                !auth.user ? (
                  <>
                    <li className="nav-item">
                      <NavLink to="/login" className="nav-link">Login</NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink to="/signup" className="nav-link">SignUp</NavLink>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="nav-item">
                      <NavLink onClick={handleLogout} to="/login" className="nav-link">Log Out</NavLink>
                    </li>
                  </>
                )
              }



            </ul>

          </div>
        </div>
      </nav>

    </>
  )
}

export default Header