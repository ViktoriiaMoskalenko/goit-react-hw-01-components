import PropTypes from 'prop-types';
import './Statistics.module.css'
import {StatisticRandomColor} from './StatisticRandomColor'


export function StatisticItem({data}) {
    return (data.map(({ id, label, percentage }) =>
        <li key={id} className="item" style={{backgroundColor:StatisticRandomColor()}}>
    <span className="label">{label}</span><br/>
    <span className="percentage">{percentage}%</span>
            </li>))
}

StatisticItem.prototype = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
}
