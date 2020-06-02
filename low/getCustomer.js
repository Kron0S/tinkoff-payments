"use strict";

const {
    requestMethod
} = require("../utils")

const getCustomer = function (params) {
    return requestMethod('GetCustomer', params)
}

module.exports = getCustomer