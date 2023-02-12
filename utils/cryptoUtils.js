exports.generatePaymentMethod = function (paymentMethod) {
    const paymentMethods = [
        { key: 'crypto-wallet', label: "Crypto Wallet", selected: false },
        { key: 'credit-card', label: "Credit Card", selected: false },
        { key: 'debit-card', label: "Debit Card", selected: false },
        { key: 'paypal', label: "PayPal", selected: false },

    ];

    const result = paymentMethods.map(x => x.key === paymentMethod ? { ...x, selected: true } : x);

    console.log(result)
    return result;
};

exports.isOwner = (user, crypto) => {

    return crypto.owner.toString() == user._id;
   // return crypto.owner == user._id;
};