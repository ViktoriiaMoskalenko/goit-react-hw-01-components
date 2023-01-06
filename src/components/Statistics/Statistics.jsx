import PropTypes from 'prop-types';
import css from './Statistics.module.css'
import { StatisticItem } from './StatisticItem'
import { StatisticsTitle } from './StatisticsTitle'

export function Statistics({data}) {
    return (
        <section className={css.statistics}>
                  <StatisticsTitle title = "Section Title"/>
            <ul className={css.stat_list}>
                <StatisticItem data={ data } />
  </ul>
</section>)
}

Statistics.prototype = {
    data: PropTypes.arrayOf(PropTypes.shape).isRequired
}