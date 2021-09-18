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
