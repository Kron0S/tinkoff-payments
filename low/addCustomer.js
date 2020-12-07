"use strict";

const {
    requestMethod
} = require("../utils")

const addCustomer = function (params) {
    return requestMethod('AddCustomer', params)
}

module.exports = addCustomer