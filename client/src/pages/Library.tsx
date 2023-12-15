import { useEffect } from "react";
import { Link } from "react-router-dom";
import { TypedUseSelectorHook, useSelector } from "react-redux";

import { RootState } from "../redux/store";
import { closeModal, openModal } from "../redux/slices";
import { ModalType } from "../types";

import { BookTable, Footer, Modal } from "../components";

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const Library = () => {
	const state = useAppSelector((state) => state);
	const { books: booksState, isLoading } = state.books;
	const { isOpen } = state.modal;

	useEffect(() => {
		closeModal();
	}, [booksState.data]);

	return (
		<div className='home-container'>
			<main className='page-header-container'>
				<img
					src='/storial-logo.png'
					alt='Storial Logo'
					className='header-logo'
				/>
				<h1 className='page-header-title'>Your Library</h1>
			</main>
			{isLoading && <div>Loading...</div>}
			{!isLoading && <BookTable />}

			<section className='page-navbar px-4 '>
				<Link to='/'>
					<button className='page-btn'>home</button>
				</Link>

				<button
					className='page-btn'
					onClick={() => openModal(ModalType.ADD_BOOK)}
				>
					quick add book
				</button>
			</section>

			{isOpen && (
				<Modal />
			)}

			<Footer />
		</div>
	);
};
