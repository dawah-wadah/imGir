import React from 'react';

const Notoriety = ( {
	points
} ) => {
	let status;

	if ( points >= 150 ) {
		status = 'Glorious';
	} else if ( points >= 120 ) {
		status = 'Renowned';
	} else if ( points >= 100 ) {
		status = 'Idolized';
	} else if ( points >= 80 ) {
		status = 'Trusted';
	} else if ( points >= 40 ) {
		status = 'Liked';
	} else if ( points >= 20 ) {
		status = 'Accepted';
	} else {
		status = 'Neutral';
	}
	return (
		<div className='notoriety textbox'>
    <h1>Notoriety: </h1><div className='spacer'/><h1 className='green'>{status}</h1>
  </div>
	);
};

export default Notoriety;
