import React from 'react';
import styles from './Button.module.css';

function Button({ text, type, capitalize, uppercase, ariaLabel }) {
	const transform = capitalize
		? 'capitalize'
		: uppercase
		? 'uppercase'
		: null;
	return (
		<a
			href="!#"
			className={`${styles.button} ${styles[type]} ${
				transform ? styles[transform] : ''
			}`}
			aria-label={ariaLabel}
		>
			{text}
		</a>
	);
}

export default Button;
