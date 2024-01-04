import axios from 'axios'
import { IBook, IUser } from '../types'

const book_api = axios.create({
    baseURL: 'https://storial-server.onrender.com/api',
});

const auth_api = axios.create({
    baseURL: 'https://storial-server.onrender.com/auth',
});

export const insertBook = (payload: IBook) => book_api.post(`/book`, payload);
export const getAllBooks = (username: string) => book_api.get(`/books/${username}`);
export const updateBookById = (id: string, payload: IBook) => book_api.put(`/book/${id}`, payload);
export const deleteBookById = (id: string) => book_api.delete(`/book/${id}`);
export const getBookById = (id: string) => book_api.get(`/book/${id}`);

export const createUser = (payload: IUser) => auth_api.post(`/signup`, payload);
export const loginUser = (payload: IUser) => auth_api.post(`/login`, payload);
export const getUser = (username: string) => auth_api.get(`/${username}`);

const apis = {
    insertBook,
    getAllBooks,
    updateBookById,
    deleteBookById,
    getBookById,
    createUser,
    loginUser,
    getUser,
};

export default apis;