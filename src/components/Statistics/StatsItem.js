import PropTypes from 'prop-types'
import './Statistics.scss'

const StatsItem = ({ label, percentage }) => {
  return (
    <>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}</span>
    </>
  )
}

StatsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
}

export default StatsItem
