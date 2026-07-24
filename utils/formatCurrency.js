export const formatNaira = (amount) =>
      '₦' + Number(amount || 0).toLocaleString('en-NG');

      export const formatNairaFull = (amount) =>
        new Intl.NumberFormat('en-NG', {
            style:    'currency',
                currency: 'NGN',
                  }).format(amount || 0);