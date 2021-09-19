import {isEmpty} from './dataHelper';

export const textBank = (str = '') => {
  if (isEmpty(str)) return '';
  let newStr;
  // convert to capitalize if words length more than 4 char
  if (str.length > 4) newStr = str.charAt(0).toUpperCase() + str.slice(1);
  // convert to uppercase if words length less than 4 char
  else newStr = str.toUpperCase();
  return newStr;
};

export const textTanggal = thisDate => {
  if (isEmpty(thisDate)) return '';
  var date = new Date(thisDate);
  var tahun = date.getFullYear();
  var bulan = date.getMonth();
  var tanggal = date.getDate();
  var bulanText = [
    '',
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ];
  return `${tanggal} ${bulanText[bulan]} ${tahun}`;
};

export const textMoney = number => {
  if (isEmpty(number)) return '';
  // convert string to array
  var num = number.toString().split('').reverse();
  // add dots to array
  const newArr = num.reduce((acc, item, index) => {
    if (index % 3 === 2 && index + 1 !== num.length) return [...acc, item, '.'];
    else return [...acc, item];
  }, []);
  // convert array with dot back to string
  const arrToStr = newArr.reverse().reduce((acc, item) => acc + item, '');
  return `Rp${arrToStr}`;
};
