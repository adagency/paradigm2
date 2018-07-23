import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Bar from './Bar';
import Menu from './Menu';

import styles from './styles.module.scss';

import content from './nav.json';

export default class Nav extends Component {
	static propTypes = {
		location: PropTypes.object,
		opened: PropTypes.bool,
		toggle: PropTypes.func,
		close: PropTypes.func
	};

	componentDidMount() {
		if (this.props.opened) this.props.close();
		window.addEventListener('wheel', this.onScroll);
		window.addEventListener('touchmove', this.onScroll);
	}

	componentWillUnmount() {
		window.removeEventListener('wheel', this.onScroll);
		window.removeEventListener('touchmove', this.onScroll);
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.opened) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.removeProperty('overflow');
			if (!document.body.getAttribute('style'))
				document.body.removeAttribute('style');
		}
		if (this.props.location !== nextProps.location) {
			this.props.close();
		}
	}

	onScroll = event => {
		if (this.props.opened) {
			event.preventDefault();
			return false;
		}
	};

	toggle = () => {
		this.props.toggle();
	};

	render() {
		return (
			<nav className={styles.nav}>
				<Bar opened={this.props.opened} toggle={this.toggle} />
				<Menu
					opened={this.props.opened}
					close={this.props.close}
					toggle={this.toggle}
					location={this.props.location}>
					{content.nav.links}
				</Menu>
			</nav>
		);
	}
}
