export const textBank = str => {};

export const textTanggal = thisDate => {
  var date = new Date(thisDate);
  var tahun = date.getFullYear();
  var bulan = date.getMonth();
  var tanggal = date.getDate();
  var hari = date.getDay();
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
