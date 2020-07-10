import React from 'react';
import styles from './Offer.module.css';
import Wrapper from './Wrapper';
import Button from '../ui/Button';
import Logo from '../ui/Logo';
import offerImg from '../../static/img/offer.jpg';

function Offer() {
	return (
		<section className={styles.container}>
			<Wrapper>
				<div className={styles.grid}>
					<div className={styles.inner}>
						<h2 className={styles.headline}>Enjoy summer deals</h2>
						<p className={styles.cta}>Up to 40% Discount!</p>
						<Button
							type="button-white"
							text="Learn more"
							capitalize={true}
						/>
						<div className={styles.logo}>
							<Logo small={true} />
						</div>
						<p className={styles.terms}>*Terms applied</p>
					</div>
					<div>
						<img
							className={styles.image}
							src={offerImg}
							alt="Enjoy Summer Deals"
						/>
					</div>
				</div>
			</Wrapper>
		</section>
	);
}

export default Offer;
