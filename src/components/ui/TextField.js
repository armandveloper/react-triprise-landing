import React from 'react';
import styles from './TextField.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function TextField({ placeholder, label, icon }) {
	return (
		<div className={styles.container}>
			<FontAwesomeIcon icon={icon} />
			<input type="text" placeholder={placeholder} aria-label={label} />
		</div>
	);
}

export default TextField;
