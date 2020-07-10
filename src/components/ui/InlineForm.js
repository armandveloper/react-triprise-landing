import React from 'react';
import styles from './InlineForm.module.css';
import {
	faSearch,
	faChevronDown,
	faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';
import TextField from './TextField';
import ButtonIcon from './ButtonIcon';

function InlineForm() {
	return (
		<form action="#" method="POST">
			<div className={styles.grid}>
				<TextField
					label="Enter a Keyword"
					placeholder="keyword"
					icon={faSearch}
				/>
				<TextField
					label="Enter your destination"
					placeholder="Destination"
					icon={faChevronDown}
				/>
				<TextField
					label="Select the duration"
					placeholder="Duration"
					icon={faChevronDown}
				/>
				<ButtonIcon title="Enviar" icon={faPaperPlane} type="submit" />
			</div>
		</form>
	);
}

export default InlineForm;
