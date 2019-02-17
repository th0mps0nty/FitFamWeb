import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from '../SignOut/SignOut';
import * as ROUTES from '../../constants/routes';

export default class AppNavbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-secondary mb-4">
        <div className="container">
          <Link to="/" className="navbar-brand">
            FitFam Meals
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarMain"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarMain">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={ROUTES.LANDING} className="nav-link">
                  Landing
                </Link>
              </li>
              <li className="nav-item">
                <Link to={ROUTES.HOME} className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to={ROUTES.ACCOUNT} className="nav-link">
                  Account
                </Link>
              </li>
              <li className="nav-item">
                <Link to={ROUTES.ADMIN} className="nav-link">
                  Admin
                </Link>
              </li>
            </ul>
          </div>
          <SignOutButton />
        </div>
      </nav>
    );
  }
}
