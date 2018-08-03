import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import Link from 'gatsby-link'
import { Row, Col } from 'components/Content'
import { Scene } from 'scrollmagic'

import list from './list'

export default class Industries extends Component {
	static contextTypes = {
	  scrollmagic: PropTypes.any,
	};

	static played = false;

	componentDidMount() {
	  if (!Industries.played) {	  
	    this.animation = new TimelineMax({
	      paused: true,
	      onComplete: () => {
	        Industries.played = true
	      },
	    }).fromTo(this.node, 1, { opacity: 0, y: 50 }, { opacity: 1, y: 0 })

	    this.scene = new Scene({ triggerElement: this.node, triggerHook: 0.6 })
	    this.scene.indicatorName = 'Industries Served'
	    this.scene.on('enter', () => this.animation.play())

	    if (process.env.NODE_ENV === 'development') {
	      this.scene.addIndicators({ name: this.scene.indicatorName })
	    }

	    this.scene.addTo(this.context.scrollmagic)
	  }
	}

	render() {
	  return (
  <div
  className={styles.container}
  ref={c => {
	        this.node = c
	      }}
	    >
  <Row>
  <Col>
      <h3 className={styles.heading}>Industries We Serve</h3>
      <ul className={styles.list}>
  {list.map((item, index) => {
	              return (
  <li className={styles.li} key={index}>
  <Link className={styles.link} to={item.to}>
  {item.text}
	                  </Link>
  <span className={styles.line} />
</li>
	              )
	            })}
	          </ul>
    </Col>
	      </Row>
	    </div>
	  )
	}
}
