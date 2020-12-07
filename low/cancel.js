"use strict";

const {
    requestMethod
} = require("../utils")

const cancel = function (params) {
    return requestMethod('Cancel', params)
}

module.exports = cancel