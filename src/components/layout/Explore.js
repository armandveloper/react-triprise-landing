import React from 'react';
import styles from './Explore.module.css';
import Wrapper from './Wrapper';
import CityCard from '../ui/CityCard';
import abuDhabiImg from '../../static/img/abu-dhabi.jpg';
import parisImg from '../../static/img/paris.jpg';
import australiaImg from '../../static/img/australia.jpg';

function Explore() {
	return (
		<section className={styles.container}>
			<Wrapper>
				<h2 className={styles.headline}>Explore Cities</h2>
				<p className={styles.description}>
					Triprise insider travel guides to the world's most exciting
					cities
				</p>
				<div className={styles.grid}>
					<CityCard
						image={abuDhabiImg}
						city="Abu Dhabi"
						description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel ducimus porro necessitatibus."
					/>
					<CityCard
						image={parisImg}
						city="Paris"
						description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel ducimus porro necessitatibus."
					/>
					<CityCard
						image={australiaImg}
						city="Australia"
						description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel ducimus porro necessitatibus."
					/>
				</div>
			</Wrapper>
		</section>
	);
}

export default Explore;
