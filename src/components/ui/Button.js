import React from 'react';
import styles from './Button.module.css';

function Button({ text, type, capitalize, uppercase }) {
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
		>
			{text}
		</a>
	);
}

export default Button;
