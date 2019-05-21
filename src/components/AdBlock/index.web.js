import React from 'react';

const AdBlock = ({ ad }) => (
	<pre>{JSON.stringify(ad, null, 4)}</pre>
);

export default AdBlock;
