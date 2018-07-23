import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import closeBtn from '../../../images/logos/close-btn.png';

export default function CloseBtn({ children, toggle }) {
	return (
		<div onClick={toggle} className={styles.closeBtn}>
			<img src={closeBtn} className={styles.closeButtonStyle} />
		</div>
	);
}

CloseBtn.propTypes = {
	children: PropTypes.any,
	toggle: PropTypes.func
};
