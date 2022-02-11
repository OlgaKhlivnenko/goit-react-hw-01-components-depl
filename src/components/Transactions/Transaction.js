import PropTypes from "prop-types";
import s from './Transactions.module.css';

const Transactions = ({ transactions }) => {
  return (
    <table>
      <thead>
        <tr className={s.transactionhistory}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(({ id, type, amount, currency }, ind) => (
          <tr key={id} style={{ background: ind % 2 === 0 ? '#eee' : '#fff' }}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

Transactions.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
export default Transactions;
