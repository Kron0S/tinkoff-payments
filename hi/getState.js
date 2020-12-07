"use strict";

const low = require("../low")

async function getState(PaymentId) {
    return await low.getState({
        PaymentId
    })
}

module.exports = getState