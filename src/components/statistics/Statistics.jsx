import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ title, stats = [] }) => {
  return (
    <section className={css.statistics}>
      <h2 className={css.statTitle}>Upload stats</h2>

      <ul className={css.statList}>
        <li className={css.statItem}>
          <span className={css.statLabel}>.docx</span>
          <span className={css.statPercentage}>4%</span>
        </li>
        <li className={css.statItem}>
          <span className={css.statLabel}>.mp3</span>
          <span className={css.statPercentage}>14%</span>
        </li>
        <li className={css.statItem}>
          <span className={css.statLabel}>.pdf</span>
          <span className={css.statPercentage}>41%</span>
        </li>
        <li className={css.statItem}>
          <span className={css.statLabel}>.mp4</span>
          <span className={css.statPercentage}>12%</span>
        </li>
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
