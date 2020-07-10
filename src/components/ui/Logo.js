import React from 'react';
import styles from './Logo.module.css';

function Logo({ dark, small }) {
	return (
		<h1>
			<a
				href="/"
				className={`${dark ? styles.logoDark : styles.logo} ${
					small ? styles.small : ''
				}`}
			>
				trip<span className={styles.light}>rise</span>
			</a>
		</h1>
	);
}

export default Logo;
