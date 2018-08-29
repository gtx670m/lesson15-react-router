import React from 'react';

import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound';
import Contact from './components/Contact';

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
    path: '',
    exact: false,
    main: () => <NotFound />
  }
];

export default routes;
