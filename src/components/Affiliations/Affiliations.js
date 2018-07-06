import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import logos from './logos'
import { Row, Col } from 'components/Content'

export default function Affiliations({ children }) {
  return (
    <div className={styles.wrapper}>
      <Row>
        <Col>
          <h3 className={styles.heading}>Our Affiliations:</h3>
          <div className={styles.container}>
            {logos.map((logo, index) => {
              return (
                <div key={index} className={styles.imgContainer}>
                  <img src={logo} className={styles.img} />
                </div>
              )
            })}
          </div>
        </Col>
      </Row>
    </div>

  )
}

Affiliations.propTypes = {
  children: PropTypes.any,
}
