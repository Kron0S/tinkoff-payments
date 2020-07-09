"use strict";

const low = require("../low")
const {
    getEncryptedCardIdData
} = require("../utils")

async function doBindingPay(RebillId, Amount, OrderId, NotificationURL, SuccessURL, FailURL, other) {
    const res = await low.init({...{
        Amount,
        OrderId,
        NotificationURL,
        SuccessURL,
        FailURL,
        PayType: 'O'
    }, ...other})
    if (!res || !res.Success) {
        throw new Error(res.ErrorCode + '. ' + res.Message + '. ' + res.Details)
    }
    const PaymentId = res.PaymentId
    const res2 = await low.charge({
        RebillId,
        PaymentId
    })
    if (!res2 || !res2.Success) {
        throw new Error(res2.ErrorCode + '. ' + res2.Message + '. ' + res2.Details)
    }
    return res2
}

module.exports = doBindingPay