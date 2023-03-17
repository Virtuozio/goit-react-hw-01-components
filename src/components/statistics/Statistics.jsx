import PropTypes from 'prop-types';
import css from './Statistics.module.css';
export const Statistics = props => (
  <section className={css.statistics}>
    {props.title && <h2 className={css.title}>{props.title}</h2>}
    <ul className={css['stat-list']}>
      {props.stats.map(obj => (
        <li key={obj.id} className="item">
          <span className={css.label}>{obj.label}</span>
          <span className={css.percentage}>{obj.percentage}</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  stats: PropTypes.array,
};
