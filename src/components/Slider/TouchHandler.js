export default class KeyHandler {
  constructor(component) {
    this.component = component
    this.init()
  }

  init() {
    document.body.style.overscrollBehaviorY = 'contain'
    window.addEventListener('touchstart', this.onTouchStart, { passive: false })
    window.addEventListener('touchmove', this.onTouchMove, { passive: false })
    window.addEventListener('touchend', this.onTouchEnd, { passive: false })
  }

  destroy() {
    document.body.style.removeProperty('overscroll-behavior-y')
    window.removeEventListener('touchstart', this.onTouchStart, { passive: false })
    window.removeEventListener('touchmove', this.onTouchMove, { passive: false })
    window.removeEventListener('touchend', this.onTouchEnd, { passive: false })
  }

  lastPos = {
    x: 0,
    y: 0,
  }

  onTouchStart = (event) => {
    if (event.touches[0]) {
      const { clientX: x, clientY: y } = event.touches[0]
      this.lastPos = { x, y }
    }
  }

  onTouchMove = (event) => {
    event.preventDefault()
    if (event.touches[0]) {
      const { clientX: x, clientY: y } = event.touches[0]
      const yDifference = this.lastPos.y - y
      const percentage = Math.abs(yDifference) / window.innerHeight
      if (percentage > 0.3) {
        this.lastPos = { x, y }
        if (yDifference < 0) this.component.setSlide('prev')
        else this.component.setSlide('next')
      } else {
        if (yDifference < 0) this.component.ref.current.peekNext((1 - percentage) * 100)
        else this.component.ref.current.peekPrev(percentage * 100)
      }
    }
  }

  onTouchEnd = (event) => {
    if (event.changedTouches[0]) {
      const { clientY: y } = event.changedTouches[0]
      const yDifference = this.lastPos.y - y
      const percentage = Math.abs(yDifference) / window.innerHeight
      if (percentage > 0.07) {
        if (yDifference < 0) this.component.setSlide('prev')
        else this.component.setSlide('next')
      }
    }
    this.component.ref.current.unPeek()
  }
}
