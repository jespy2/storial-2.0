import { IBook, IUser, ModalType } from '../index';

export interface IModalState { 
  isOpen: boolean;
  modalContentType: ModalType;
  id?: string;
}

export interface IAlertState {
  isOpen: boolean;
  message: string;
  onConfirm: () => void;
  notificationMessage: string;
};

export interface INotificationState {
  isOpen: boolean;
  message: string;
};

export enum SortItem {
  TITLE = 'title',
  AUTHOR = 'author',
  STATUS = 'status',
}

export enum SortDirection {
  ASC = 'asc',
  DESC = 'desc',
  NONE = 'none',
}

export interface IBookState { 
  books: {
    success: boolean;
    data: IBook[];
    sortInfo: {
      sortBy: SortItem | '';
      sortDirection: SortDirection;
    }
  };
  isLoading: boolean;
  isError: boolean;
}

export interface IAuthState {
  auth: {
    isLoggedIn: boolean | undefined;
    isAuthenticated: boolean;
    isRegistered: boolean;
    userInfo: IUser;
    }
  isLoading: boolean;
  isError: boolean;
}