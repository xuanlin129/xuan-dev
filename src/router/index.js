import React from 'react';
import { createHashRouter } from 'react-router-dom';
import PageWithHelmet from '../components/PageWithHelmet';

const Layout = React.lazy(() => import('../layouts/Layout'));
const Home = React.lazy(() => import('../pages/Home'));
const About = React.lazy(() => import('../pages/About'));
const NotFound = React.lazy(() => import('../pages/NotFound'));

const routerConfig = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '', element: <Home />, pageKey: 'home' },
      { path: 'about', element: <About />, pageKey: 'about' },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
    pageKey: 'notFound',
  },
];

const transformRoutes = (routes) => {
  return routes.map((route) => {
    const { children, pageKey, element, ...rest } = route;
    const newRoute = { ...rest };

    if (element) {
      newRoute.element = pageKey ? <PageWithHelmet pageKey={pageKey}>{element}</PageWithHelmet> : element;
    }

    if (children) {
      newRoute.children = transformRoutes(children);
    }

    return newRoute;
  });
};

const router = createHashRouter(transformRoutes(routerConfig));

export default router;
