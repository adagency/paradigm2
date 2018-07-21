import React, { cloneElement, Children, Component } from 'react';
import PropTypes from 'prop-types';
import KeyHandler from './KeyHandler';
import MouseHandler from './MouseHandler';
import TouchHandler from './TouchHandler';
import Tracker from './Tracker';

import styles from './styles.module.scss';

export default class Slider extends Component {
	static propTypes = {
		children: PropTypes.node
	};
	static timeout = 500;

	state = {
		current: 0,
		direction: 'next',
		transitioning: false,
		firstAppear: true
	};

	ref = [];

	componentDidMount() {
		this.keyHandler = new KeyHandler(this);
		this.mouseHandler = new MouseHandler(this);
		this.touchHandler = new TouchHandler(this);
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.state.current !== prevState.current && !this.state.transitioning) {
			this.onTransition();
		}
	}

	componentWillUnmount() {
		clearTimeout(this.timer);
		this.keyHandler.destroy();
		this.mouseHandler.destroy();
		this.touchHandler.destroy();
	}

	get children() {
		const { children } = this.props;
		const { current } = this.state;
		return Children.map(children, (child, index) =>
			cloneElement(child, { key: index, index, current })
		);
	}

	getChild(position) {
		const { children } = this.props;
		const { current, direction, firstAppear } = this.state;
		const timeout = Slider.timeout / 1000;
		const index = this[position];
		const ref = c => {
			this.ref[position] = c;
		};
		return cloneElement(children[index], {
			ref,
			firstAppear,
			current,
			direction,
			index,
			key: index,
			position,
			set: this.setSlide,
			timeout
		});
	}

	onTransition() {
		this.setState({ transitioning: true });
		this.timer = setTimeout(this.onTimeout, Slider.timeout);
	}

	onTimeout = () => {
		this.setState({ transitioning: false, firstAppear: false });
	};

	get current() {
		return this.state.current;
	}

	get next() {
		return (this.state.current + 1) % Children.count(this.props.children);
	}

	get prev() {
		return this.state.current - 1 < 0
			? Children.count(this.props.children) - 1
			: this.state.current - 1;
	}

	goTo = index => {
		if ((index < 0) | (index >= this.props.children.length)) return;
		if (this.state.transitioning) return;
		let direction = 'next';
		if (index === this.prev) direction = 'prev';
		this.setState({ current: index, direction });
	};

	setSlide = direction => {
		if (this.state.transitioning) return;
		this.setState({ current: this[direction], direction });
	};

	render() {
		const { current } = this.state;
		return (
			<div className={styles.wrapper}>
				<Tracker
					current={current}
					length={this.children.length}
					onClick={this.goTo}
				/>
				<div>
					{this.getChild('prev')}
					{this.getChild('current')}
					{this.getChild('next')}
				</div>
			</div>
		);
	}
}
