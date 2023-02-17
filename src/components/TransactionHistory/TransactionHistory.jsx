import {Table, TableBody, TableHead} from "./TransactionHistory.styled";
import PropTypes from "prop-types";

export const TransactionHistory = ({items}) => {
  const ucFirst = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  return (
    <Table className="transaction-history">
      <TableHead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </TableHead>

      <TableBody>
        {items.map(({id, type, amount, currency}) => (<tr key={id}>
          <td>{ucFirst(type)}</td>
          <td>{amount}</td>
          <td>{currency}</td>
        </tr>))}
      </TableBody>
    </Table>
  )
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired
  })).isRequired
}
