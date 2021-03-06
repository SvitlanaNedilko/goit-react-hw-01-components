import PropTypes from 'prop-types'
import TransactionsItem from './TransactionsItem'
import './Transaction.scss'

export default function TransactionHistory({ items }) {
  return (
    <table className="transaction-history">
      <thead className="transaction-head">
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => (
          <TransactionsItem
            key={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        ))}
      </tbody>
    </table>
  )
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
}
