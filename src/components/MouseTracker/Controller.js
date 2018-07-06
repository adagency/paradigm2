export default class Controller {
  constructor(canvas) {
    this.canvas = canvas
    this.context = canvas.getContext('2d')

    // set inital values
    this.mouse.radius = this.mouse.initial

    // size canvas
    this.onResize()

    // add event listeners
    document.addEventListener('mousemove', this.onMouseMove, { passive: true })
    window.addEventListener('resize', this.onResize, { passive: true })
    window.addEventListener('wheel', this.onWheel, { passive: true })

    // rAF
    this.requestID = window.requestAnimationFrame(this.update)
  }

  destroy() {
    document.removeEventListener('mousemove', this.onMouseMove, { passive: true })
    window.removeEventListener('resize', this.onResize, { passive: true })
    window.removeEventListener('wheel', this.onWheel, { passive: true })
    window.cancelAnimationFrame(this.requestID)
  }

  onResize = () => {
    this.canvas.height = this.canvas.offsetHeight
    this.canvas.width = this.canvas.offsetWidth
  }

  mouse = {
    initialize: true,
    initial: 10,
    x: 0,
    y: 0,
  }

  state = {
    active: false,
    targetX: 0,
    targetY: 0,
  }

  onMouseMove = (event) => {
    const { clientX, clientY } = event
    const hoverState = this.getHoveredState(document.elementFromPoint(clientX, clientY))
    this.setState({ active: hoverState, targetX: clientX, targetY: clientY })
    this.move()
  }

  onWheel = (event) => {
    this.onMouseMove(event)
  }

  setState(newState) {
    const prevState = this.state
    this.state = { ...this.state, ...newState }
    if (this.state.active !== prevState.active) this.tweenRadius(!this.state.active)
  }

  tweenRadius = (reverse) => {
    const radius = reverse ? this.mouse.initial : this.mouse.initial * 2
    TweenMax.to(this.mouse, 0.25, { radius, ease: Power0.easeNone, onUpdate: this.update })
  }

  move = () => {
    if (this.moveAnim) this.moveAnim.kill()
    const { targetX: x, targetY: y } = this.state
    this.moveAnim = TweenMax.to(this.mouse, 0.25, { x, y, onUpdate: this.update })
  }

  getHoveredState(target) {
    if (!target) return false
    return ['BUTTON', 'A'].indexOf(target.tagName) > -1 || target.classList.contains('hover-effect')
  }

  update = () => {
    this.draw()
  }

  draw() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    this.context.filter = 'blur(1px)'
    this.drawCircle()
    this.context.stroke()
  }

  drawCircle() {
    const { x, y, radius } = this.mouse
    this.context.beginPath()
    this.context.arc(x, y, radius, 0, 2 * Math.PI, false)
    this.context.fillStyle = 'rgba(0, 0, 0, 0.25)'
    this.context.strokeStyle = 'transparent'
    this.context.fill()
    this.context.lineWidth = 1
  }
}
