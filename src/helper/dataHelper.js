export const isEmpty = data => {
  if (data === null) return true;
  else if (data === undefined) return true;
  else if (data === 0) return true;
  else if (typeof data === 'object' && data === {}) return true;
  else if (typeof data === 'string' && data === '') return true;
  else if (Array.isArray(data) && data.length === 0) return true;
  else return false;
};
