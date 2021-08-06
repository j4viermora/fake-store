import React from 'react';
import { useStoreContext } from '../../context/StoreContext';
import Footer from '../components/Footer';
import Modal from '../components/Modal';
import Navbar from '../components/Navbar';

export default function Layout({ children }) {
	const {
		storeState: { modal },
		dispatch,
	} = useStoreContext();

	const closeModal = () => {
		dispatch({ type: 'closeModal' });
	};

	return (
		<>
			<Navbar />
			{children}
			<Modal
				isActive={modal}
				content="This features actually is development, sorry..."
				buttonTextOne="OK"
				buttonTextTwo="I want more information"
				buttonClose={closeModal}
				clickActionOne={closeModal}
			/>
			<Footer />
		</>
	);
}
