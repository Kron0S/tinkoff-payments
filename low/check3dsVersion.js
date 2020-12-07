"use strict";

const {
    requestMethod
} = require("../utils")

const check3dsVersion = function (params) {
    return requestMethod('Check3dsVersion', params)
}

module.exports = check3dsVersion