import {
  LandingPage,
  LoginPage,
  FriendPage,
  ChattingPage,
  ChattingRoomPage,
} from '../pages';

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
  FRIEND_PAGE: {
    path: '/friend',
    link: '/friend',
    element: <FriendPage />,
  },
  CHATTING_PAGE: {
    path: '/chatting',
    link: '/chatting',
    element: <ChattingPage />,
  },
  CHATTING_ROOM_PAGE: {
    path: '/chatting/:id',
    link: '/chatting',
    element: <ChattingRoomPage />,
  },
  // 밑으로 계속 추가하기
};

export const ROUTE_ARR = Object.values(ROUTE);
