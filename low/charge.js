"use strict";

const {
    requestMethod
} = require("../utils")


const charge = function (params) {
    return requestMethod('Charge', params)
}

module.exports = charge