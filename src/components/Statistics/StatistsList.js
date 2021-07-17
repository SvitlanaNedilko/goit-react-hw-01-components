import StatsItem from './StatsItem'
import PropTypes from 'prop-types'
import './Statistics.scss'

export default function StatsList({ stats }) {
  return (
    <ul className="stats-list">
      {stats.map((stat) => (
        <li className="stats-item" key={stat.id}>
          <StatsItem label={stat.label} percentage={stat.percentage} />
        </li>
      ))}
    </ul>
  )
}

StatsList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
}
