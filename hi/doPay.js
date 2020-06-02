"use strict";

const low = require("../low")
const {
    getEncryptedCardData
} = require("../utils")

async function doPay(CustomerKey, CardData, Amount, OrderId, NotificationURL, SuccessURL, FailURL) {
    const res = await low.init({
        Amount,
        OrderId,
        NotificationURL,
        SuccessURL,
        FailURL,
        CustomerKey,
        PayType: 'O'
    })
    if (!res || !res.Success) {
        throw new Error(res.ErrorCode + '. ' + res.Message + '. ' + res.Details)
    }
    const PaymentId = res.PaymentId
    const res2 = await low.finishAuthorize({
        CardData: getEncryptedCardData(CardData.pan, CardData.expDate, CardData.cardHolder, CardData.cvv),
        PaymentId
    })
    if (!res2 || !res2.Success) {
        throw new Error(res2.ErrorCode + '. ' + res2.Message + '. ' + res2.Details)
    }
    return res2
}


module.exports = doPay