"use strict";

const low = require("../low")

async function resend() {
    return await low.resend()
}

module.exports = resend