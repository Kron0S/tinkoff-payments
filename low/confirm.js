"use strict";

const {
    requestMethod
} = require("../utils")

const confirm = function (params) {
    return requestMethod('Confirm', params)
}

module.exports = confirm