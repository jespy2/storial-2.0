import { NavigateFunction } from "react-router-dom";
import { IBook, ISortInfo } from "../index";

export interface IBookTableProps {
  books: IBook[];
  setBooks: React.Dispatch<React.SetStateAction<IBook[]>>
}

export interface ITableBodyProps { 
  navigate: NavigateFunction;
}

export interface ITableHeaderProps { 
  handleClick: (sortByString: string) => void;
  sortInfo: ISortInfo
}

export interface ISortProps {
  books: IBook[];
  setBooks: React.Dispatch<React.SetStateAction<IBook[]>>;
  sortInfo: ISortInfo;
  setSortInfo: React.Dispatch<React.SetStateAction<ISortInfo>>;
  sortByString: string;
}