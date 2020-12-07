"use strict";

const low = require("../low")

async function confirm(PaymentId) {
    return await low.confirm({
        PaymentId
    })
}

module.exports = confirm