import React from 'react'
import PropTypes from 'prop-types'
import ReactPlayer from 'react-player'

export default function Video({ url }) {
  if (url.includes('senserasystems')) {
    return (
      <iframe src={url} style={{ border: '0px #ffffff none' }} name='myiFrame' scrolling='no' frameBorder='1' marginHeight='0px' marginWidth='0px' height='400px' width='600px' allowFullScreen='' />
    )
  } else if (url.includes('player.vimeo')) {
    return (
      <ReactPlayer url={url} playing />
    )
  } else return <ReactPlayer url={url} playing controls />
}

Video.propTypes = {
  url: PropTypes.string,
}
