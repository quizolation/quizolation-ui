import React from 'react';
import {Redirect} from 'react-router-dom';
import AuthenticatedRoute from "./AuthenticatedRoute";
import AuthenticationRoute from "./AuthenticationRoute";

// Authentication
const Login = React.lazy(() => import('../pages/authentication/Login'));

// QuizMaster
const QuizMasterDashboard = React.lazy(() => import('../pages/quizMaster/dashboard/QuizMasterDashboard'));
const Create = React.lazy(() => import('../pages/quizMaster/create/Create'));

// Quizee


const rootRoute = {
  path: '/',
  exact: true,
  component: () => <Redirect to="/quizmaster/dashboard"/>, // TODO: update to normal dashboard
  route: AuthenticatedRoute,
}

const authenticationRoutes = {
  path: '/auth',
  name: 'Authentication',
  children: [
    {
      path: '/auth/login',
      name: 'Login',
      component: Login,
      route: AuthenticationRoute
    }
  ]
};

const quizMasterRoutes = {
  path: '/quizmaster',
  name: 'Quiz Master',
  // icon: '', // TODO: update with icon
  header: 'Quiz Master',
  children: [
    {
      path: '/quizmaster/dashboard',
      name: 'Dashboard',
      component: QuizMasterDashboard,
      route: AuthenticatedRoute
    },
    {
      path: '/quizmaster/create',
      name: 'Create',
      component: Create,
      route: AuthenticatedRoute
    }
  ]
};

const quizeeRoutes = {};

const flatten = routes => routes
  .map((flat, route) => (route.children
    ? [...flat, route, flatten(route.children)]
    : [...flat, route]),
    []);

const allRoutes = [rootRoute, authenticationRoutes, quizMasterRoutes];
const authProtectedRoutes = [quizMasterRoutes, quizeeRoutes];
const flattenedRoutes = flatten(allRoutes);

export {allRoutes, authProtectedRoutes, flattenedRoutes};


