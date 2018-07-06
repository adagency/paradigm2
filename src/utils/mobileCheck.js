export default function mobileCheck() {
  let isMobile = false
  if (typeof navigator !== 'undefined') {
    isMobile = navigator && navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/)
  }
  return isMobile
}
