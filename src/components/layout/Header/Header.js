import React from 'react';
import styles from './Header.module.css';
import Wrapper from '../Wrapper';
import Logo from '../../ui/Logo';
import Nav from '../../ui/Nav';

function Header() {
	return (
		<header className={styles.header}>
			<Wrapper>
				<div className={styles.headerInner}>
					<Logo dark={true} />
					<Nav />
				</div>
			</Wrapper>
		</header>
	);
}

export default Header;
