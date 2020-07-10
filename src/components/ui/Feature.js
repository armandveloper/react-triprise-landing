import React from 'react';
import styles from './Feature.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Feature({ icon, title, description }) {
	return (
		<article className={styles.feature}>
			<FontAwesomeIcon icon={icon} className={styles.icon} />
			<h3 className={styles.featureTitle}>{title}</h3>
			<p className={styles.featureDescription}>{description}</p>
		</article>
	);
}

export default Feature;
