"use strict";

const low = require("../low")

async function cancel(PaymentId) {
    return await low.cancel({
        PaymentId
    })
}

module.exports = cancel