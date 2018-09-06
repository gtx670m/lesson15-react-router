import React from 'react';

import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound';
import Contact from './components/Contact';
import Products from './components/Products';
import Login from './components/Login';
import Logout from './components/Logout';

const routes = [
  {
    path: '/',
    exact: true,
    main: () => <Home />
  },
  {
    path: '/about',
    exact: false,
    main: () => <About />
  },
  {
    path: '/contact',
    exact: false,
    main: () => <Contact />
  },
  {
    path: '/products',
    exact: false,
    main: ({ match }) => <Products match={match} />
  },
  {
    path: '/link1',
    exact: false,
    main: () => <NotFound />
  },
  {
    path: '/link2',
    exact: false,
    main: () => <NotFound />
  },
  {
    path: '/link3',
    exact: false,
    main: () => <NotFound />
  },
  {
    path: '/login',
    exact: false,
    main: () => <Login />
  },
  {
    path: '/logout',
    exact: false,
    main: () => <Logout />
  },
  {
    path: '',
    exact: false,
    main: () => <NotFound />
  }
];

export default routes;
