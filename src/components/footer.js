import React from 'react';
import './footer.scss';

function Footer() {
	return (
		<div className='footerDiv'>
			<p>
				Made with <i className='fas fa-heart' /> and{' '}
				<i className='fas fa-code' /> by Vidhi Agarwal
			</p>
			<p> Powered by NewsAPI.</p>
		</div>
	);
}
export default Footer;
