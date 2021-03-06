import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Image from './Image'

import styles from './styles.module.scss'

export default class Gallery extends Component {
  static propTypes = {
    data: PropTypes.array,
  }

  sizing(index) {
    if (this.props.data.length % 2 !== 0 && index === this.props.data.length - 1) return '100'
    const reverse = Math.floor(index / 6) % 2 !== 0
    const remainder = index % 6

    // console.log(remainder + ' - ' + reverse);    
    switch (remainder) {
      case 0:
      case 3:
        // return reverse ? '65' : '35'
        return reverse ? '50' : '50'
      case 1:
      case 2:
        // return reverse ? '35' : '65'
        return reverse ? '50' : '50'
      case 4:
      case 5:
        return '50'
    }
  }

  latetrigger(index){
    if(window.innerWidth < 640)
    {
      return 0.7;
    }
    else{
      if (index % 2 == 0)
        return 0.7;
      else
        return 0.35;
    }
  }

  get children() {
    return this.props.data.map((obj, index) => (
      <Image alt={obj.image.alt} src={obj.image.url} size={this.sizing(index)} key={index} trigger={this.latetrigger(index)} />
    ))
  }

  render() {
    return (
      <div className={styles.container}>
        {this.children}
      </div>
    )
  }
}
