import React, { Component } from 'react';
import { NavLink, Route, Link } from 'react-router-dom';

const menus = [
  {
    label: 'About',
    to: '/about',
    exact: true
  },
  {
    label: 'Contact',
    to: '/contact',
    exact: false
  },
  {
    label: 'Products',
    to: '/products',
    exact: false
  },
  {
    label: 'Link1',
    to: '/link1',
    exact: false
  },
  {
    label: 'Link2',
    to: '/link2',
    exact: false
  },
  {
    label: 'Link3',
    to: '/link3',
    exact: false
  },
  {
    label: 'Login',
    to: '/login',
    exact: false
  }
]

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  return (
    <Route path={to} exact={activeOnlyWhenExact}
      children={({ match }) => {
        let active = match ? 'active etc' : '';
        return (
          // <li className={active}>
          <li className={`my-li ${active}`}>
            <Link
              className="nav-link"
              to={to}>
              {label}
            </Link>
          </li>
        )
      }}
    />
  )
}

class Header extends Component {
  showMenus = (menus) => {
    let result = null;
    if (menus.length > 0) {
      result = menus.map((menu, index) => {
        return (
          <MenuLink
            key={index}
            label={menu.label}
            to={menu.to}
            activeOnlyWhenExact={menu.exact} />
        )
      });
    }
    return result;
  }

  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <ul className="navbar-nav">
          {/* <Link exact to="/">Home</Link> */}
          <li>
            <NavLink
              className="nav-link"
              // activeStyle={{
              //   backgroundColor: 'yellow',
              //   color: 'red'
              // }}
              activeClassName="active" //use available active class of
              exact to="/">Home
            </NavLink>
          </li>
          {this.showMenus(menus)}
        </ul>
      </nav>
    );
  }
}

export default Header;
