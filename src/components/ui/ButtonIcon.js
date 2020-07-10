import React from 'react';
import styles from './ButtonIcon.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ButtonIcon({ title, icon, type }) {
	return (
		<button type={type} title={title} className={styles.button}>
			<FontAwesomeIcon icon={icon} className={styles.icon} />
		</button>
	);
}

export default ButtonIcon;
