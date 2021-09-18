import {colour} from '../assets/styles';

export const getStatus = status => {
  let result;
  if (status === 'PENDING') {
    result = {
      text: 'Pengecekan',
      color: colour.PRIMARY,
    };
  } else if (status === 'SUCCESS') {
    result = {
      text: 'Berhasil',
      color: colour.SECONDARY,
    };
  } else {
    result = {
      text: '',
      color: transparent,
    };
  }
  return result;
};
