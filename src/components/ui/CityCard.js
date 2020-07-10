import React from 'react';
import styles from './CardCity.module.css';

function CityCard({ image, city, description }) {
	return (
		<div className={styles.card}>
			<img className={styles.image} src={image} alt={city} />
			<h4 className={styles.title}>{city}</h4>
			<p className={styles.text}>{description}</p>
		</div>
	);
}

export default CityCard;
