export default class GyroHandler {
  constructor(update, init, node) {
    this.node = node
    this.init = init
    this.update = update
    this.calculateCenter()
    this.mount()
  }

  mount() {
    const GyroNorm = require('gyronorm/dist/gyronorm.complete.min.js')
    this.gyro = new GyroNorm()
    this.gyro.init({ frequency: 200 }).then(() => {
      this.gyro.start(this.onGyro)
      this.init()
    }).catch(e => {
      console.info(e)
    })
  }

  onGyro = (data) => {
    let dx
    if (window.innerHeight > window.innerWidth) {
      dx = data.do.gamma
    } else {
      dx = data.do.beta
    }
    this.update(dx)
  }

  onResize = () => {
    this.calculateCenter()
  }

  isActive() {
    return this.gyro.isRunning()
  }

  calculateCenter() {
    const rect = this.node.getBoundingClientRect()
    const x = rect.left + rect.width / 2
    const y = rect.top + rect.height / 2
    const w = rect.width
    const h = rect.width
    this.position = { x, y, w, h }
  }

  destroy() {
    this.gyro.end()
  }
}
