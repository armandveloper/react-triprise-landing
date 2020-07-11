import React from 'react';
import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faFacebookF,
	faTwitter,
	faLinkedinIn,
	faYoutube,
	faApple,
	faGooglePlay,
} from '@fortawesome/free-brands-svg-icons';
import Wrapper from './Wrapper';
import FooterNav from '../ui/FooterNav';
import { companyLinks, contactLinks, legalLinks } from '../../data';

function Footer() {
	return (
		<footer className={styles.footer}>
			<Wrapper>
				<div className={styles.inner}>
					<FooterNav headline="The company" links={companyLinks} />
					<FooterNav headline="Contact us" links={contactLinks} />
					<FooterNav headline="Legal" links={legalLinks} />
					<FooterNav headline="Follow us">
						<a
							className={styles.socialLink}
							href="!#"
							aria-label="Síguenos en Facebook"
						>
							<FontAwesomeIcon icon={faFacebookF} />
						</a>
						<a
							className={styles.socialLink}
							href="!#"
							aria-label="Síguenos en Twitter"
						>
							<FontAwesomeIcon icon={faTwitter} />
						</a>
						<a
							className={styles.socialLink}
							href="!#"
							aria-label="Síguenos en Linkedin"
						>
							<FontAwesomeIcon icon={faLinkedinIn} />
						</a>
						<a
							className={styles.socialLink}
							href="!#"
							aria-label="Suscríbete a nuestro canal de Youtube"
						>
							<FontAwesomeIcon icon={faYoutube} />
						</a>
						<FooterNav nesting={true} headline="Download app:">
							<a
								className={styles.downloadApp}
								href="!#"
								aria-label="Descargar en Play Store"
							>
								<FontAwesomeIcon icon={faGooglePlay} />
							</a>
							<a
								className={styles.downloadApp}
								href="!#"
								aria-label="Descargar en App Store"
							>
								<FontAwesomeIcon icon={faApple} />
							</a>
						</FooterNav>
					</FooterNav>
				</div>
			</Wrapper>
		</footer>
	);
}

export default Footer;
