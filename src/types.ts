export interface Launch {
  id: string;
  provider: string;
}

export interface Event {
  id: number;
  provider: string;
}
export interface IData {
  id: number;
  title: string;
  url: string;
  imageUrl: string;
  newsSite: string;
  summary: string;
  publishedAt: Date;
  updatedAt: Date;
  featured: boolean;
  launches: Launch[];
  events: Event[];
}

export interface IState {
  isLoading: boolean;
  isError: boolean;
  isAuth: boolean;
  languge: string;
  posts: IData[];
}

export interface INavbarProps {
  mode: boolean;
  chandeMode: any;
}

export interface IMainState {
  mode: boolean;
}

export interface ILogInProps {
  setPopup: (value: boolean) => void;
  mode: boolean;
}

export interface ILogInInputs {
  username: string;
  password: string;
}

export interface ILogInUser {
  username: string;
  password: string;
}

export interface IProfileUser {
  username: string;
  password: string;
}

export interface IProfileAvatar {
  userimage: string;
}

export interface IProfileInputs {
  username?: string;
  password?: string;
  userimage?: string;
}
