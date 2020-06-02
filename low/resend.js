"use strict";

const {
    requestMethod
} = require("../utils")

const resend = function (params) {
    return requestMethod('Resend', params)
}

module.exports = resend