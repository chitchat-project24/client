import { LandingPage, ProfileListPage, ChattingListPage } from '../pages';

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
  PROFILE_LIST_PAGE: {
    path: '/profilelist',
    link: '/profilelist',
    element: <ProfileListPage />,
  },
  CHATTING_LIST_PAGE: {
    path: '/chattinglist',
    link: '/chattinglist',
    element: <ChattingListPage />,
  },
  // 밑으로 계속 추가하기
};

export const ROUTE_ARR = Object.values(ROUTE);
