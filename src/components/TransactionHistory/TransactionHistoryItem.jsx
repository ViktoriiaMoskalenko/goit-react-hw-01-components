import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css'
import {TransactionHistoryBg} from './TransactionHistoryBg'


let i = 0;
export function TransactionHistoryItem({ transactions }) {
    return (transactions.map(({ id, type, amount, currency }) => 
    {i += 1
        return (<tr key={id} style={{ backgroundColor: TransactionHistoryBg(i) }}>
      <td className={css.item}>{type}</td>
      <td className={css.item}>{amount}</td>
      <td className={css.item}>{currency}</td>
    </tr>)})
  )
}

TransactionHistoryItem.prototype = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired
}