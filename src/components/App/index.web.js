import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

import Endorsements from '../Endorsements';
import Header from '../Header';
import Offerings from '../Offerings';
import ThreadBlocks from '../ThreadBlocks';

function App() {
	return (
		<Fragment>
			<Helmet defaultTitle="marandiz.co" titleTemplate="%s | marandiz.co" />
			<Header />
			<Offerings />
			<Endorsements />
			<ThreadBlocks />
		</Fragment>
	);
}

export default App;
