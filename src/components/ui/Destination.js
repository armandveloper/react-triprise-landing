import React from 'react';
import styles from './Destination.module.css';

function Destination({ name, tours, img, featured }) {
	return (
		<div
			className={`${styles.destination} ${
				featured ? styles.featured : ''
			}`}
		>
			<img src={img} alt={name} className={styles.image} />
			<p className={styles.tours}>
				<span
					className={`${styles.badge} ${
						featured ? styles.badgeFeatured : ''
					}`}
				>
					{tours} tours
				</span>
			</p>

			<h3 className={styles.name}>{name}</h3>
		</div>
	);
}

export default Destination;
