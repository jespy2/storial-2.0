import { modalContent } from "./modal-content";
import { useAppSelector } from "../../hooks";

import { ModalHeader } from "./modal-content/modal-content/ModalHeader";

export const Modal = () => {
	const state = useAppSelector((state) => state);
	const { modalContentType } = state.modal;
  console.log(state.modal)
	let _modalContent;
	if (modalContentType === "NONE") {
		_modalContent = {
			header: '',
			body: () => <></>,
		};
  } else {
    console.log(modalContentType);
		_modalContent = modalContent[modalContentType]();
	}
	const { title, body } = _modalContent;

	return (
		<div className='modal-screen-background'>
			<div className='modal-container'>
				<div className='modal-header'>
					<ModalHeader title={title ? title : ""} />
				</div>
				<div className='modal-body'>{body()}</div>
			</div>
		</div>
	);
};