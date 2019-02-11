import React from 'react';
import { Link } from 'react-router-dom';

import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Button } from 'reactstrap';
import SignOutButton from '../SignOut/SignOut';
import * as ROUTES from '../../constants/routes';
import { AuthUserContext } from '../Session/Session';

const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser => (authUser ? <NavigationAuth /> : <NavigationNonAuth />)}
    </AuthUserContext.Consumer>
  </div>
);

const NavigationAuth = () => (
  <div>
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/">FitFam</NavbarBrand>
      <Nav className="ml-auto" navbar>
        <NavItem className="navbar-text">
          <NavLink tag={Link} to={ROUTES.LANDING}>
            Landing
          </NavLink>
        </NavItem>
        <NavItem className="navbar-text">
          <NavLink tag={Link} to={ROUTES.HOME}>
            Home
          </NavLink>
        </NavItem>
        <NavItem className="navbar-text">
          <NavLink tag={Link} to={ROUTES.ACCOUNT}>
            Account
          </NavLink>
        </NavItem>
        <NavItem className="navbar-text">
          <NavLink tag={Link} to={ROUTES.ADMIN}>
            Admin
          </NavLink>
        </NavItem>
        <SignOutButton />
      </Nav>
    </Navbar>
  </div>
);

const NavigationNonAuth = () => (
  <div>
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/">FitFam</NavbarBrand>
      <Nav className="ml-auto" navbar>
        <NavItem className="navbar-text">
          <NavLink tag={Link} to={ROUTES.LANDING}>
            Landing
          </NavLink>
        </NavItem>
        <NavItem className="navbar-text">
          <NavLink tag={Link} to={ROUTES.SIGN_IN}>
            Sign In
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  </div>
);

export default Navigation;
