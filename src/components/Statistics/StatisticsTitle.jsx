import PropTypes from 'prop-types';
import css from './Statistics.module.css'

export function StatisticsTitle({ title }) {
    if (!title) {
        return ''
    } else {
        return (<h2 className={css.title}>{ title}</h2>)
    }   
}

StatisticsTitle.prototype = {
    title: PropTypes.string
}