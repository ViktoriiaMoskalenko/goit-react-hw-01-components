import PropTypes from 'prop-types';
import './Statistics.css'
import { StatisticItem } from './StatisticItem'


export const Statistics = ({ data, title }) => 
 
(title ? <section className="statistics">
           <h2 className="title">{title.title}</h2>
            <ul className="stat_list">
                <StatisticItem data={ data } />
  </ul>
</section> : <section className="statistics">
            <ul className="stat_list">
                <StatisticItem data={ data } />
  </ul>
    </section>)



Statistics.prototype = {
    data: PropTypes.arrayOf(PropTypes.shape).isRequired,
    title: PropTypes.string
}