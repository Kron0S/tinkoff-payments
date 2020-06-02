"use strict";

const low = require("../low")
const {
    getEncryptedCardIdData
} = require("../utils")

async function doBindingPay(CardId, cvv, Amount, OrderId, NotificationURL, SuccessURL, FailURL) {
    const res = await low.init({
        Amount,
        OrderId,
        NotificationURL,
        SuccessURL,
        FailURL,
        PayType: 'O'
    })
    if (!res || !res.Success) {
        throw new Error(res.ErrorCode + '. ' + res.Message + '. ' + res.Details)
    }
    const PaymentId = res.PaymentId
    const res2 = await low.finishAuthorize({
        CardData: getEncryptedCardIdData(CardId, cvv),
        PaymentId
    })
    if (!res2 || !res2.Success) {
        throw new Error(res2.ErrorCode + '. ' + res2.Message + '. ' + res2.Details)
    }
    return res2
}

module.exports = doBindingPay