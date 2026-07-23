export const formatNaira = (amount) => {
  return '₦' + Number(amount || 0).toLocaleString('en-NG');
};

export const formatNairaFull = (amount) => {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
  }).format(amount || 0);
};

