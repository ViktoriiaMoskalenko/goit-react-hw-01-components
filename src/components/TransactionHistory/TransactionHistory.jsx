import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css'
import {TransactionHistoryItem} from './TransactionHistoryItem'

export function TransactionHistory({transactions}) {
    return (<table className={css.transaction_history}>
  <thead>
    <tr className={css.event}>
      <th className={css.item}>Type</th>
      <th className={css.item}>Amount</th>
      <th className={css.item}>Currency</th>
    </tr>
  </thead>
  <tbody>
    <TransactionHistoryItem transactions={ transactions } />
  </tbody>
</table>)
}

TransactionHistory.prototype = {
    transact8iions: PropTypes.arrayOf(PropTypes.shape).isRequired
}