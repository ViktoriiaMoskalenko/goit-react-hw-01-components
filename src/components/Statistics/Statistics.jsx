import PropTypes from 'prop-types';
import styles from'./Statistics.module.css'
import { StatisticItem } from './StatisticItem'


export const Statistics = ({ data, title }) => 
 
{
    return (<section className={styles.statistics}>
        {title && <h2 className={styles.title}>{title}</h2>}
        <ul className={styles.stat_list}>
                <StatisticItem data={ data } />
  </ul>
</section>)}



Statistics.prototype = {
    data: PropTypes.arrayOf(PropTypes.shape).isRequired,
    title: PropTypes.string
}