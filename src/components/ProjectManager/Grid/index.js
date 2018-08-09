import React, { Component } from 'react'
import queryString from 'query-string'
import PropTypes from 'prop-types'

import Card from './Card'
import Button from './Button'
import ContactCTA from 'components/ContactCTA'
import Indutries from 'components/Industries'

import styles from './styles.module.scss'


var smoothScroll = {
	timer: null,

	stop: function () {
		clearTimeout(this.timer);
	},

	scrollTo: function (id, callback) {		
		var settings = {
			duration: 2000,
			easing: {
				outQuint: function (x, t, b, c, d) {
					return c*((t=t/d-1)*t*t*t*t + 1) + b;
				}
			}
		};
		var percentage;
		var startTime;
		var node = document.getElementById(id);
		var nodeTop = node.offsetTop;
		var nodeHeight = node.offsetHeight;
		var body = document.body;
		var html = document.documentElement;
		var height = Math.max(
			body.scrollHeight,
			body.offsetHeight,
			html.clientHeight,
			html.scrollHeight,
			html.offsetHeight
		);
		var windowHeight = window.innerHeight
		var offset = window.pageYOffset;
		var delta = nodeTop - offset;
		var bottomScrollableY = height - windowHeight;
		var targetY = (bottomScrollableY < delta) ?
			bottomScrollableY - (height - nodeTop - nodeHeight + offset):
			delta;

		startTime = Date.now();
		percentage = 0;

		if (this.timer) {
			clearInterval(this.timer);
		}

		function step () {
			var yScroll;
			var elapsed = Date.now() - startTime;

			if (elapsed > settings.duration) {
				clearTimeout(this.timer);
			}

			percentage = elapsed / settings.duration;

			if (percentage > 1) {
				clearTimeout(this.timer);

				if (callback) {
					callback();
				}
			} else {
				yScroll = settings.easing.outQuint(0, elapsed, offset, targetY, settings.duration);
				window.scrollTo(0, yScroll);
				this.timer = setTimeout(step, 10);     
			}
		}

		this.timer = setTimeout(step, 10);
	}
};

export default class Grid extends Component {
	static propTypes = {
	  data: PropTypes.array,
	};

	state = {
	  filter: 'all',
	};

	componentDidMount() {
	  this.createAnimation()
	  this.animation.play()

	  setTimeout(function() {}, 5000);

	  const query = queryString.parse(location.search)

	  if (query.ref) {
	    smoothScroll.scrollTo('industries');  
	  }
	}

	componentWillUpdate(){
		this.createAnimation()
		this.animation.play()

		const query = queryString.parse(location.search)

		if (query.ref) {			
			smoothScroll.scrollTo('industries');  		
		}
	}

	componentDidUpdate(prevProps, prevState) {
	  if (prevState.filter !== this.state.filter) {
	    this.createAnimation()
	    this.animation.play()
	  }
	}

	createAnimation() {
	  if (this.animation) this.animation.kill()
	  const projects = this.node.children
	  this.animation = new TimelineMax({
	    paused: true,
	    delay: 0.5,
	  }).staggerFromTo(
	    projects,
	    0.75,
	    { opacity: 0, y: '-100%', pointerEvents: 'none' },
	    {
	      opacity: 1,
	      y: '0%',
	      ease: Power2.easeOut,
	      pointerEvents: 'none',
	      clearProps: 'all',
	    },
	    0.15
	  )
	}


	get filteredData() {
	  const { data } = this.props
	  const { filter } = this.state
	  switch (filter) {
	    case 'completed':
	      return data.filter(item => item.tags.includes('completed'))
	    case 'current':
	      return data.filter(item => item.tags.includes('current'))
	    default:
	      return data
	  }
	}

	get children() {
	  const data = this.filteredData
	  return data.map((doc, index) => <Card content={doc} key={index} />)
	}

	onClick = filter => {
	  if (filter === this.state.filter) return
	  this.setState({ filter })
	};

	render() {
	  const { filter } = this.state

	  return (
	  	<div className={styles.wrapper}>
	  		<div className={styles.header}>
	  			<h2 className={styles.title}>Our Projects</h2>				
	  			<div>
			  		<Button current={filter} filter='all' onClick={this.onClick}>All Projects</Button>
			  		<Button current={filter} filter='current' onClick={this.onClick}>Current Projects</Button>
			  		<Button current={filter} filter='completed' onClick={this.onClick}>Completed Projects</Button>
	  			</div>
	  		</div>
	  		<div
	  			className={styles.container}
	  			ref={c => {
	  			this.node = c
	  			}}
	  			>
	  				{this.children}
	  		</div>	  	
	  		<Indutries
	  			ref={c => {
	  			this.industries = c
	  			}}
	  			/>
	  		<ContactCTA />
	  	</div>
	  )
	}
}
