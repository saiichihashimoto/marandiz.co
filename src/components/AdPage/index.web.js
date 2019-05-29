import React from 'react';
import ReactModal from 'react-modal';
import { Helmet } from 'react-helmet';
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

	const { title } = ad;

	return (
		<AdPageContainer {...otherProps}>
			<Helmet>
				<title>{title}</title>
				<meta property="og:title" content={title} />
			</Helmet>
			<div>Ad Page</div>
			<pre>{JSON.stringify(ad, null, 4)}</pre>
		</AdPageContainer>
	);
}

export default AdPage;
