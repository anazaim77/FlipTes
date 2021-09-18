import {isEmpty} from './dataHelper';

export function searchFind(rows, query) {
  const columns = rows[0] && Object.keys(rows[0]);
  return rows.filter(row =>
    columns.some(column => {
      if (!isEmpty(row[column]))
        return (
          row[column].toString().toLowerCase().indexOf(query.toLowerCase()) > -1
        );
    }),
  );
}

export function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) return -1;
  if (b[orderBy] > a[orderBy]) return 1;
  return 0;
}

export function getSorting(order, orderBy) {
  return order === 'desc'
    ? (a, b) => desc(a, b, orderBy)
    : (a, b) => -desc(a, b, orderBy);
}

export function stableSort(array, cmp) {
  // convert data to new scheme
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}
