import React from 'react';
import styles from './Features.module.css';
import {
	faGlobeAmericas,
	faDollarSign,
	faUserFriends,
} from '@fortawesome/free-solid-svg-icons';
import Wrapper from './Wrapper';
import Feature from '../ui/Feature';

function Features() {
	return (
		<Wrapper>
			<div className={styles.features}>
				<Feature
					icon={faGlobeAmericas}
					title="700+ Destinations"
					description="Our expert team handpicked all destinations in this site"
				/>
				<Feature
					icon={faDollarSign}
					title="Best Price Guarantee"
					description="Price match within 48 hours of order confirmation"
				/>
				<Feature
					icon={faUserFriends}
					title="Top Notch support"
					description="We are here to help, before during, and even after your
                trip"
				/>
			</div>
		</Wrapper>
	);
}

export default Features;
