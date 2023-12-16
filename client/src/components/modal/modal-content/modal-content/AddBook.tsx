import { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";

import { AppDispatch } from "../../../../redux/store";
import { closeModal } from "../../../../redux/slices";
import thunks from "../../../../redux/thunks/books";

export const AddBook = () => {
	const [title, setTitle] = useState("");
	const [author, setAuthor] = useState("");
	const [notes, setNotes] = useState("");
	const dispatch = useDispatch<AppDispatch>();

	//upon render, apply focus to title field
	const titleField = useRef<HTMLInputElement | null>(null);
	useEffect(() => {
		titleField.current && titleField.current.focus();
	}, []);

	const handleSubmit = async (e: { preventDefault: () => void }) => {
		e.preventDefault();
		const payload = { title, author, notes };

		await dispatch(thunks.insertBook(payload)).then(() => {
			dispatch(closeModal());
		});
	};

	const body = () => (
		<>
			<form className='flex flex-col' onSubmit={handleSubmit}>
				<label
					className='block text-gray-700 text-sm font-bold mb-2'
					htmlFor='title'
				>
					Title
				</label>
				<input
					type='text'
					name='title'
					ref={titleField}
					id='title'
					className='textfield focus:outline-none focus:shadow-outline'
					required
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<label>Author</label>
				<input
					type='text'
					name='Author'
					id='Author'
					className='textfield focus:outline-none focus:shadow-outline'
					required
					value={author}
					onChange={(e) => setAuthor(e.target.value)}
				/>
				<label>Notes</label>
				<textarea
					name='Notes'
					id='Notes'
					className='textfield focus:outline-none focus:shadow-outline h-28'
					required
					value={notes}
					onChange={(e) => setNotes(e.target.value)}
				/>
				<input type='submit' value='Add Book' className='submit-btn' />
			</form>
		</>
	);
	return {
		title: "Add a book",
		body,
	};
};