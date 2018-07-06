import ProjectManager from './ProjectManager'
import { connect } from 'react-redux'

function mapStateToProps({ router, prismic }) {
  let data = []
  if (prismic.data) data = prismic.data.filter(doc => doc.type === 'project')
  return {
    location: router.location,
    data,
  }
}

export default connect(mapStateToProps, null)(ProjectManager)
export Project from './Project'
export Grid from './Grid'
