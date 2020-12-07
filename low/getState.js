"use strict";

const {
    requestMethod
} = require("../utils")

const getState = function (params) {
    return requestMethod('GetState', params)
}

module.exports = getState