import React from 'react';
import ReactModal from 'react-modal';
import { Redirect } from 'react-router-dom';
import styles from './AdPage.module.scss';

function AdPageContainer({ children, useModal = false, onClose = () => {} }) {
	return useModal ?
		(
			// http://reactcommunity.org/react-modal/#usage
			<ReactModal
				isOpen
				className={styles.modal}
				overlayClassName={styles.modalOverlay}
				bodyOpenClassName={styles.fixScroll}
				htmlOpenClassName={styles.fixScroll}
				onRequestClose={onClose}>
				{children}
			</ReactModal>
		) :
		(
			<div className={styles.page}>
				{children}
			</div>
		);
}

function AdPage({ ad, ...otherProps }) {
	if (!ad) {
		return <Redirect to="/" />;
	}

	return (
		<AdPageContainer {...otherProps}>
			<div>Ad Page</div>
			<pre>{JSON.stringify(ad, null, 4)}</pre>
		</AdPageContainer>
	);
}

export default AdPage;
