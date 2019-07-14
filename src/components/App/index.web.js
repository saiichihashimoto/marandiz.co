import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

import Endorsements from '../Endorsements';
import ThreadBlocks from '../ThreadBlocks';

function App() {
	return (
		<Fragment>
			<Helmet defaultTitle="marandiz.co" titleTemplate="%s | marandiz.co" />
			<Endorsements />
			<ThreadBlocks />
		</Fragment>
	);
}

export default App;
