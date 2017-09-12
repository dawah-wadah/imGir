import React from 'react';

const Notoriety = ( {
	points
} ) => {
	let status;

	if ( points > 20000 ) {
		status = 'Glorious';
	} else if ( points >= 8000 ) {
		status = 'Renowned';
	} else if ( points >= 8000 ) {
		status = 'Idolized';
	} else if ( points >= 2000 ) {
		status = 'Trusted';
	} else if ( points >= 1000 ) {
		status = 'Liked';
	} else if ( points >= 400 ) {
		status = 'Accepted';
	} else {
		status = 'Neutral';
	}
	return (
		<div className='notoriety textbox'>
    <h1>Notoriety: {status}</h1>
  </div>
	);
};

export default Notoriety;
