import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.tableTrans}>
      <thead className={css.theadTrans}>
        <tr className={css.theadItem}>
          <th className={css.theadColumn}>Type</th>
          <th className={css.theadColumn}>Amount</th>
          <th className={css.theadColumn}>Currency</th>
        </tr>
      </thead>
      <tbody className={css.tbodyTrans}>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id} className={css.tbodyItem}>
            <td className={css.tbodyColumn}>{type}</td>
            <td className={css.tbodyColumn}>{amount}</td>
            <td className={css.tbodyColumn}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
