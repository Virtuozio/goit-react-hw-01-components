import PropTypes from 'prop-types';
import css from './Statistics.module.css';
export const Statistics = props => (
  <section className={css.statistics}>
    {props.title && <h2 className={css.title}>{props.title}</h2>}
    <ul className={css['stat-list']}>
      {props.stats.map(obj => (
        <li
          key={obj.id}
          className={css.item}
          style={{ backgroundColor: getRandomHexColor() }}
        >
          <span className={css.label}>{obj.label}</span>
          <span className={css.percentage}>{obj.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

const getRandomHexColor = () =>
  `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;

Statistics.propTypes = {
  stats: PropTypes.array,
};
