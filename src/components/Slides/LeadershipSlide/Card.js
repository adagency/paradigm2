import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './styles.module.scss';

class Card extends Component {
	static propTypes = {
		children: PropTypes.any.isRequired,
		hasOverlay: PropTypes.bool.isRequired,
		styles: PropTypes.object
	};

	render() {
		const { hasOverlay, children, style } = this.props;
		return (
			<div
				className={
					hasOverlay ? cx(styles.cardItem, styles.cardOverlay) : styles.cardItem
				}
				style={style}>
				{children}
			</div>
		);
	}
}

export default Card;
