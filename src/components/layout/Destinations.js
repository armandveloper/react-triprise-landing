import React from 'react';
import styles from './Destinations.module.css';
import Wrapper from './Wrapper';
import Destination from '../ui/Destination';
import popular1Img from '../../static/img/popular1.jpg';
import popular2Img from '../../static/img/popular2.jpg';
import popular3Img from '../../static/img/popular3.jpg';
import popular4Img from '../../static/img/popular4.jpg';
import popular5Img from '../../static/img/popular5.jpg';

function Destinations() {
	return (
		<section className={styles.container}>
			<Wrapper>
				<h2 className={styles.headline}>Popular Destinations</h2>
				<a className={styles.link} href="!#">
					View all destinations
				</a>
				<div className={styles.grid}>
					<Destination
						name="Western Europe"
						tours={3}
						img={popular1Img}
						featured={true}
					/>
					<Destination
						name="Scandinavia"
						tours={2}
						img={popular2Img}
					/>
					<Destination name="Asia" tours={5} img={popular3Img} />
					<Destination name="America" tours={4} img={popular4Img} />
					<Destination
						name="Africa Wild"
						tours={3}
						img={popular5Img}
					/>
				</div>
			</Wrapper>
		</section>
	);
}

export default Destinations;
