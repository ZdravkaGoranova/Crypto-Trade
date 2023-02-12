exports.generatePaymentMethod = function (paymentMethod) {
    const paymentMethods = [
        { key: 'crypto-wallet', selected: false },
        { key: 'credit-card', selected: false },
        { key: 'debit-card', selected: false },
        { key: 'paypal', selected: false },
        
    ];

    const result = paymentMethods.map(x => x.key === paymentMethod ? { ...x, selected: true } : x);

    //console.log(result)
    return result;
};

exports.isOwner = (user, crypto) => {
    return crypto.owner == user._id;
};