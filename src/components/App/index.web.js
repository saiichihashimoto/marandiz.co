import React, { Fragment, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Route, withRouter } from 'react-router-dom';
import { useDebounce } from 'use-debounce';
import AdBlocks from '../AdBlocks';
import AdPage from '../AdPage';

const { ads = [] } = JSON.parse(document.querySelector('#googleSheets').innerHTML);

const adsByUrl = Object.fromEntries(ads.map((ad) => [ad.url, ad]));

function App({ history, location: { pathname } }) {
	const [input, setInput] = useState('');
	const [useModal, setUseModal] = useState(false);
	const [searchTerm] = useDebounce(input, 480);

	if (!useModal && pathname === '/') {
		setUseModal(true);
	}

	const goHome = () => {
		if (pathname === '/') {
			return;
		}
		history.push('/');
	};

	const setInputAndRedirect = (value) => {
		goHome();
		setInput(value);
	};

	return (
		<Fragment>
			<Helmet defaultTitle="Pinterest Ad Examples" titleTemplate="%s | Pinterest Ad Examples">
				<meta charset="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
				<meta name="theme-color" content="#000000" />
				<meta property="og:site_name" content="Pinterest Ad Examples" />
			</Helmet>
			<input
				type="text"
				value={input}
				autoFocus={useModal}
				onChange={({ target: { value } }) => setInputAndRedirect(value)}
				onFocus={goHome} />
			<div>
				<button type="button" onClick={() => setInputAndRedirect('Marco')}>Marco</button>
				<button type="button" onClick={() => setInputAndRedirect('Shayan')}>Shayan</button>
			</div>
			{
				useModal ?
					<AdBlocks ads={ads} searchTerm={searchTerm} /> :
					<Route exact path="/" render={() => <AdBlocks ads={ads} searchTerm={searchTerm} />} />
			}
			<Route exact path="/:url" render={({ match: { params: { url } } }) => <AdPage ad={adsByUrl[url]} useModal={useModal} onClose={goHome} />} />
		</Fragment>
	);
}

export default withRouter(App);
