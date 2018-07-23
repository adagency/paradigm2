import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { random } from 'lodash';
import cx from 'classnames';

import Bottom from './Bottom';
import FileLink from 'components/FileLink';
import Button from 'components/Button';
import styles from './styles.module.scss';

import config from 'config';

export default class ContactCTA extends Component {
	static propTypes = {
		data: PropTypes.array,
		hash: PropTypes.string,
		slide: PropTypes.bool
	};

	static cachedData = [];

	state = {
		current: this.testimony,
		x: 0,
		y: 0
	};

	componentDidMount() {
		if (this.props.slide) {
			this.createSlideAnimation();
		}
		if (this.cachedData.length === 0 && this.props.data.length > 0)
			this.refreshCache(this.props.data);
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.data.length !== this.props.data.length) {
			this.refreshCache(nextProps.data);
		}
	}

	onEntering = (direction, timeout, firstAppear) => {
		this.animation
			.timeScale(1)
			.delay(timeout)
			.restart(true);
	};

	onLeaving = (direction, timeout) => {
		this.animation.pause(0);
	};

	createSlideAnimation() {
		this.animation = new TimelineMax({ paused: true })
			.fromTo(this.background, 1, { opacity: 0 }, { opacity: 1 })
			.fromTo(this.title, 1, { opacity: 0, y: 25 }, { opacity: 1, y: 0 }, 1)
			.staggerFromTo(
				this.list.children,
				0.5,
				{ opacity: 0, y: 25 },
				{ opacity: 1, y: 0 },
				0.25,
				1.25
			)
			.fromTo(this.left, 2, { opacity: 0, y: 25 }, { opacity: 1, y: 0 }, 2)
			.fromTo(
				this.svg,
				3,
				{ opacity: 0 },
				{ opacity: 1, ease: Power2.easeOut },
				2.5
			);
	}

	refreshCache(data) {
		this.cachedData = data.filter(doc => {
			return (
				doc.data.body &&
				doc.data.body[0] &&
				doc.data.body[0].primary &&
				doc.data.body[0].primary.quote &&
				doc.data.body[0].primary.testimonial &&
				doc.data.body[0].primary.testimonial.url
			);
		});
		if (!this.state.current) this.setState({ current: this.testimony });
	}

	get cachedData() {
		return ContactCTA.cachedData;
	}

	set cachedData(data) {
		ContactCTA.cachedData = data;
	}

	get testimony() {
		const { hash } = this.props;
		let testimony = null;
		if (hash) testimony = this.cachedData.find(doc => doc.uid === hash);
		if (!testimony)
			testimony = this.cachedData[random(this.cachedData.length - 1)];
		return testimony;
	}

	truncate(quote) {
		const maxLength = 180;
		if (quote.length > maxLength) return quote.slice(0, maxLength - 3) + '...';
		else return quote;
	}

	handleMouseMove = event => {
		this.setState({ x: event.clientX, y: event.clientY });
	};

	getClassnames() {
		const { x, y } = this.state;

		if (x > y) {
			return cx(styles.svg, styles.svgLeftRotation);
		} else {
			return cx(styles.svg, styles.svgRightRotation);
		}
	}

	render() {
		const testimony = this.state.current;

		const style = {
			backgroundImage: testimony && `url("${testimony.data.banner.url}")`
		};
		const gap = 7;
		return (
			<div className={styles.wrapper} onWheel={this.handleMouseMove}>
				<div
					className={styles.background}
					style={style}
					ref={c => {
						this.background = c;
					}}
				/>
				<svg
					viewBox="0 0 100 100"
					className={this.getClassnames()}
					ref={c => {
						this.svg = c;
					}}>
					<rect x="0" y="0" width={50 - gap} height={50 - gap} />
					<rect x={50 + gap} y="0" width={50 - gap} height={50 - gap} />
					<rect x={50 + gap} y={50 + gap} width={50 - gap} height={50 - gap} />
					<rect x="0" y={50 + gap} width={50 - gap} height={50 - gap} />
				</svg>
				<div className={styles.container}>
					<div className={styles.row}>
						<div className={styles.col}>
							<div>
								<div
									style={{ display: 'inline-block' }}
									ref={c => {
										this.title = c;
									}}>
									<h2 className={styles.title}>Contact Us</h2>
									<p className={styles.phone}>
										<a href={config.tel}>{config.phone}</a>
									</p>
								</div>
								<ul
									className={styles.list}
									ref={c => {
										this.list = c;
									}}>
									<li className={styles.item}>
										<Button to="/contact">Become a Client</Button>
									</li>
									<li className={styles.item}>
										<Button to="/subcontractors">Become a Contractor</Button>
									</li>
									<li className={styles.item}>
										<Button to="/careers">Careers</Button>
									</li>
								</ul>
							</div>
						</div>
						<div
							className={styles.col}
							ref={c => {
								this.left = c;
							}}>
							<div className={styles.content}>
								{testimony && (
									<p className={styles.quote}>
										“{this.truncate(testimony.data.body[0].primary.quote)}”
									</p>
								)}
								<div className={styles.file}>
									{testimony && <p>- {testimony.data.title}</p>}
									{testimony && (
										<FileLink
											to={testimony.data.body[0].primary.testimonial.url}>
											View Testimonial
										</FileLink>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
				<Bottom />
			</div>
		);
	}
}
