"use strict";

const {
    requestMethod
} = require("../utils")

const getAddCardState = function (params) {
    return requestMethod('GetAddCardState', params)
}

module.exports = getAddCardState