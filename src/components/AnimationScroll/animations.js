export const fadeIn = {
  from: { opacity: 0 },
  to: { opacity: 1 },
}

export const fadeInLeft = {
  from: { x: 50, opacity: 0 },
  to: { x: 0, opacity: 1 },
}

export const fadeInUp = {
  from: { y: 50, opacity: 0 },
  to: { y: 0, opacity: 1 },
}

export const fadeInRight = {
  from: { x: -50, opacity: 0 },
  to: { x: 0, opacity: 1 },
}

export const scaleIn = {
  from: { scaleX: 0.5, opacity: 0 },
  to: { scaleX: 1, opacity: 1 },
}

export const imageLeft = {
  from: { transformPerspective: 1000, rotationY: 40, x: '-50%', z: -500, transformOrigin: 'right', opacity: 0 },
  to: { transformPerspective: 1000, rotationY: 0, x: '0%', z: 0, transformOrigin: 'right', opacity: 1 },
}

export const imageRight = {
  from: { transformPerspective: 1000, rotationY: 40, x: '50%', z: -500, transformOrigin: 'left', opacity: 0 },
  to: { transformPerspective: 1000, rotationY: 0, x: '0%', z: 0, transformOrigin: 'left', opacity: 1 },
}

export const slidein = {
  from: {
    marginLeft: '40%',
    width: '100%',
    color:'#203040'
  },
  to: {
      marginLeft: '0%',
      width: '100%',
      color:'#56a6c9'
  }
}

export const rotation = {
  from: {
    rotation:0
  },
  to: {
    rotation:360
  }
}

export const gallery = {
  from: { opacity: 0 },
  to: { opacity: 1 }
}
