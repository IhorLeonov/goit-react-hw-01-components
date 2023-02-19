import PropTypes from 'prop-types';
// import css from './TransactionHistory.module.css';
import {
  TableTrans,
  TheadTrans,
  TheadItem,
  TheadColumn,
  TbodyItem,
  TbodyColumn,
} from 'components/Transactions/Transactions.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TableTrans>
      <TheadTrans>
        <TheadItem>
          <TheadColumn>Type</TheadColumn>
          <TheadColumn>Amount</TheadColumn>
          <TheadColumn>Currency</TheadColumn>
        </TheadItem>
      </TheadTrans>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <TbodyItem key={id}>
            <TbodyColumn>{type}</TbodyColumn>
            <TbodyColumn>{amount}</TbodyColumn>
            <TbodyColumn>{currency}</TbodyColumn>
          </TbodyItem>
        ))}
      </tbody>
    </TableTrans>
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
