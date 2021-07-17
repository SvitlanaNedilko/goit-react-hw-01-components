import PropTypes from 'prop-types'
import './Transaction.scss'

const TransactionsItem = ({ type, amount, currency }) => {
  return (
    <>
      <tr>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
    </>
  )
}

TransactionsItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
}

export default TransactionsItem
