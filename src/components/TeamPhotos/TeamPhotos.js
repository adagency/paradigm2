import React, { Component } from 'react'
import BioModal from './BioModal'
import data from './data'
import Photo from './Photo'

import styles from './styles.module.scss'

export default class TeamPhotos extends Component {
  state = {
    current: -1,
  }

  onClick = (index) => {
    this.setState({ current: index })
  }

  render() {
    const { current } = this.state
    return (
      <div className={styles.wrapper}>
        <BioModal onClick={this.onClick} data={data[current]} />
        <div className={styles.container}>
          {data.map((bio, index) => {
            return (
              <Photo
                key={index}
                name={bio.name}
                src={bio.src}
                title={bio.title}
                index={index}
                onClick={this.onClick}
              />
            )
          })}
        </div>
      </div>
    )
  }
}
