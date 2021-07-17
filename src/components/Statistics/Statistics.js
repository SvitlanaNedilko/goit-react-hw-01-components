import PropTypes from 'prop-types'
import './Statistics.scss'

function Statistics({ title, children }) {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}
      {children}
    </section>
  )
}

Statistics.prototype = {
  title: PropTypes.string,
  children: PropTypes.node,
}

export default Statistics
