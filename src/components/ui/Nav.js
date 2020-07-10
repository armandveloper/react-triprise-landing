import React from 'react';
import styles from './Nav.module.css';
import Button from './Button';

function Nav() {
	return (
		<nav>
			<a href="!#" className={styles.link}>
				Destinations
			</a>
			<a href="!#" className={styles.link}>
				Whislists
			</a>
			<Button text="Sign up" type="button-primary" uppercase={true} />
		</nav>
	);
}

export default Nav;
