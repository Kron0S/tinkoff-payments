"use strict";

const {
    requestMethod
} = require("../utils")

const attachCard = function (params) {
    return requestMethod('AttachCard', params)
}

module.exports = attachCard