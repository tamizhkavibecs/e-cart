import React from 'react';
import logo from '../logo1.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
    const { cartItems } = useSelector(state => state.cart);
    const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)
    return (
        <nav className="navbar text-light  navbar-expand-lg navbar-info bg-info">
            <div className="container-fluid">
                {/* Logo */}
                <Link className="navbar-brand" to='/' >
                    <img src={logo} alt="logo" width="30" height="30" className="d-inline-block align-top" />
                    {' '}  E-Cart
                </Link>

                {/* Toggler for mobile view */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navigation Links */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link active " to='/'>
                                <i className="fas fa-home"></i> Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/users'>
                                <i className="fas fa-users"></i> Users
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-link" to='/products'>
                                <i className="fas fa-book"></i> Products
                            </Link>
                        </li>
                        <li className="nav-item">
                            {/* <Link className="nav-link">
                                <i className="fas fa-shopping-cart"></i> Cart
                            </Link> */}
                            <Link to="/cart" className="nav-link">
                                <i className="fas fa-shopping-cart"></i>Cart <span className="badge bg-primary">{cartCount}</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
