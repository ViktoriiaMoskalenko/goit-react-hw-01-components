import PropTypes from 'prop-types';
import  styles from './Statistics.module.css'
import {StatisticRandomColor} from './StatisticRandomColor'


export function StatisticItem({data}) {
    return (data.map(({ id, label, percentage }) =>
        <li key={id} className={styles.item} style={{backgroundColor:StatisticRandomColor()}}>
            <span className={styles.label}>{label}</span><br/>
            <span className={styles.percentage}>{percentage}%</span>
            </li>))
}

StatisticItem.prototype = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
}
