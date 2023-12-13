import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { IBookTableProps, ISortInfo } from "../../types";
import { handleSort } from "./BookTable.config";
import { TableBody } from "./TableBody";
import { TableHeader } from "./TableHeader";

export const BookTable = (props: IBookTableProps) => {
	const { books, setBooks } = props;
	const [sortInfo, setSortInfo] = useState<ISortInfo>({
		sortBy: "",
		sortDirection: "",
	});
	const navigate = useNavigate();

	const handleClick = (sortByString: string) => {
		const sortProps = {
			books,
			setBooks,
			sortInfo,
			setSortInfo,
			sortByString,
		};
		handleSort(sortProps);
	};

	return (
		<div className='flex-grow overflow-auto h-80 w-3/4 rounded-md shadow-lg'>
			{!books && <div>Collecting your books from the shelves...</div>}
			{books && (
				<table className='relative w-full table '>
					<TableHeader handleClick={handleClick} sortInfo={sortInfo} />
					<TableBody books={books} navigate={navigate} />
				</table>
			)}
		</div>
	);
};