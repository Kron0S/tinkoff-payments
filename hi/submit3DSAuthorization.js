"use strict";

const low = require("../low")

async function submit3DSAuthorization(MD, PaRes, PaymentId) {
    return await low.submit3DSAuthorization({
        MD,
        PaRes,
        PaymentId
    })
}

module.exports = submit3DSAuthorization