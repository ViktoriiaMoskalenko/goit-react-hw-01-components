import PropTypes from 'prop-types';
import css from './Statistics.module.css'
import {StatisticRandomColor} from './StatisticRandomColor'


export function StatisticItem({data}) {
    return (data.map(({ id, label, percentage }) =>
        <li key={id} className={css.item} style={{backgroundColor:StatisticRandomColor()}}>
    <span className={css.label}>{label}</span><br/>
    <span className={css.percentage}>{percentage }%</span>
            </li>))
}

StatisticItem.prototype = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
}
