import React from 'react';
import PropTypes from 'prop-types';

import eyeLogo from '../../images/logos/eye.png';
import styles from './styles.module.scss';

export default function FileLink({ children, to }) {
	return (
		<a href={to} target="_blank" className={styles.link}>
			<img src={eyeLogo} className={styles.eyeIcon} />
			<span>{children}</span>
		</a>
	);
}

FileLink.propTypes = {
	children: PropTypes.node,
	to: PropTypes.string
};
