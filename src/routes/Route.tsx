import { LandingPage, LoginPage, ProfileListPage } from '../pages';

interface RouteItem {
  path: string;
  link: string;
  element: JSX.Element;
}

interface Routes {
  [key: string]: RouteItem;
}

export const ROUTE: Routes = {
  LANDING_PAGE: {
    path: '/',
    link: '/',
    element: <LandingPage />,
  },
  LOGIN_PAGE: {
    path: '/login',
    link: '/login',
    element: <LoginPage />,
  },
  PROFILE_LIST_PAGE: {
    path: '/profilelist',
    link: '/profilelist',
    element: <ProfileListPage />,
  },
  // 밑으로 계속 추가하기
};

export const ROUTE_ARR = Object.values(ROUTE);
