import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css'
import {TransactionHistoryItem} from './TransactionHistoryItem'

export function TransactionHistory({transactions}) {
    return (<table className={styles.transaction_history}>
  <thead>
    <tr className={styles.event}>
      <th className={styles.item}>Type</th>
      <th className={styles.item}>Amount</th>
      <th className={styles.item}>Currency</th>
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