import React from 'react';
import styles from './Hero.module.css';
import InlineForm from './InlineForm';

function Hero() {
	return (
		<section className={styles.hero}>
			<div className={styles.inner}>
				<h2 className={styles.title}>Find next place to visit</h2>
				<p className={styles.description}>
					Discover amazing places at exclusives deals
				</p>
				<InlineForm />
			</div>
		</section>
	);
}

export default Hero;
