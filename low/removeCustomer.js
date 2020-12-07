"use strict";

const {
    requestMethod
} = require("../utils")

const removeCustomer = function (params) {
    return requestMethod('RemoveCustomer', params)
}

module.exports = removeCustomer