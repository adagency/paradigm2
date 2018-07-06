import ContactCTA from './ContactCTA'
import { connect } from 'react-redux'

const mapStatToProps = ({ prismic }) => ({
  data: prismic.data ? prismic.data.filter(doc => doc.type === 'project') : [],
})

export default connect(mapStatToProps, null, null, { withRef: true })(ContactCTA)
