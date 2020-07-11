import React from 'react';
import styles from './FooterNav.module.css';

function FooterNav({ headline, links, nesting, children }) {
	return (
		<div className={nesting ? styles.space : null}>
			<h4 className={styles.headline}>{headline}</h4>
			<nav>
				{links
					? links.map((link) => (
							<a key={link} href="!#" className={styles.link}>
								{link}
							</a>
					  ))
					: children}
			</nav>
		</div>
	);
}

export default FooterNav;
