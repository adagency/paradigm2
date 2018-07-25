import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Hamburger from '../Hamburger';
import Headroom from 'react-headroom';
import Link from 'components/Link';

import styles from './styles.module.scss';
import './headroom.scss';

import logo from 'images/logos/paradigm-greyscale-logo.png';

export default class Bar extends PureComponent {
	static propTypes = {
		opened: PropTypes.bool,
		toggle: PropTypes.func
	};

	settings = {
		disableInlineStyles: true
	};

	render() {
		const { toggle, opened } = this.props;
		return (
			<Headroom {...this.settings}>
				<div className={styles.container}>
					<div className={styles.responsiveLeft}>
						<Link to="/" className={styles.logoLink}>
							<img src={logo} alt="logo" className="hover-effect" />
						</Link>
					</div>
					<div className={styles.left}>
						<Link to="/">Home</Link>
						<Link to="/projects#">Projects</Link>
						<Link to="/services">Services</Link>
						<Link to="/" className={styles.logoLink}>
							<img src={logo} alt="logo" className="hover-effect" />
						</Link>
						<Link to="/projects?ref=industries">Industries</Link>
						<Link to="/about">About</Link>
						<Link to="/contact">Contact</Link>
					</div>
					<div className={styles.right}>
						<div>
							<Hamburger opened={opened} onClick={toggle} />
						</div>
					</div>
				</div>
			</Headroom>
		);
	}
}
